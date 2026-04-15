'use client';
import { useState, useEffect } from 'react';

export interface ProjectStats {
  version: string;
  releaseUrl: string;
  isBeta: boolean;
  stars: string;
  dockerPulls: string;
  loading: boolean;
}

const GITHUB_REPO_URL = 'https://api.github.com/repos/nickelsh1ts/streamarr';
const GITHUB_RELEASE_URL =
  'https://api.github.com/repos/nickelsh1ts/streamarr/releases/latest';
const DOCKER_PULLS_URL =
  'https://img.shields.io/docker/pulls/nickelsh1ts/streamarr.json';

const CACHE_KEY = 'streamarr_project_stats';
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

interface CachedData {
  ts: number;
  stats: Omit<ProjectStats, 'loading'>;
}

const FALLBACK: Omit<ProjectStats, 'loading'> = {
  version: 'v1.4.0',
  releaseUrl: 'https://github.com/nickelsh1ts/streamarr/releases/tag/v1.4.0',
  isBeta: true,
  stars: '57+',
  dockerPulls: '5.3K+',
};

function formatCount(n: number): string {
  if (n >= 1_000_000)
    return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K+`;
  return `${n}+`;
}

function readCache(): Omit<ProjectStats, 'loading'> | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedData = JSON.parse(raw);
    if (Date.now() - cached.ts > CACHE_TTL) return null;
    return cached.stats;
  } catch {
    return null;
  }
}

function writeCache(stats: Omit<ProjectStats, 'loading'>): void {
  try {
    const data: CachedData = { ts: Date.now(), stats };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable
  }
}

// Module-level promise so multiple hook instances share a single in-flight request
let inflightPromise: Promise<Omit<ProjectStats, 'loading'>> | null = null;

function fetchStats(): Promise<Omit<ProjectStats, 'loading'>> {
  if (inflightPromise) return inflightPromise;

  inflightPromise = Promise.all([
    fetch(GITHUB_REPO_URL, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null),
    fetch(GITHUB_RELEASE_URL, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null),
    fetch(DOCKER_PULLS_URL, {
      headers: { Accept: 'application/json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null),
  ])
    .then(([repo, release, docker]) => {
      const tag: string = release?.tag_name ?? FALLBACK.version;
      const major = parseInt(tag.replace(/^v/, ''), 10);

      const result: Omit<ProjectStats, 'loading'> = {
        version: tag,
        releaseUrl: release?.html_url ?? FALLBACK.releaseUrl,
        isBeta: isNaN(major) || major < 2,
        stars:
          typeof repo?.stargazers_count === 'number'
            ? formatCount(repo.stargazers_count)
            : FALLBACK.stars,
        dockerPulls: docker?.message
          ? docker.message.toUpperCase()
          : FALLBACK.dockerPulls,
      };

      writeCache(result);
      return result;
    })
    .catch(() => FALLBACK)
    .finally(() => {
      inflightPromise = null;
    });

  return inflightPromise;
}

export default function useProjectStats(): ProjectStats {
  const initialCache = typeof window !== 'undefined' ? readCache() : null;

  const [stats, setStats] = useState<Omit<ProjectStats, 'loading'>>(
    initialCache ?? FALLBACK
  );
  const [loading, setLoading] = useState(!initialCache);

  useEffect(() => {
    if (initialCache) return;

    let cancelled = false;

    fetchStats().then((result) => {
      if (!cancelled) {
        setStats(result);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ...stats, loading };
}
