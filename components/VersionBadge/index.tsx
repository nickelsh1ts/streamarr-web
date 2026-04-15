'use client';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useProjectStatsContext } from '@context/ProjectStatsContext';

export default function VersionBadge() {
  const { version, releaseUrl, isBeta, loading } = useProjectStatsContext();

  return (
    <a
      href={releaseUrl}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary/80 text-primary-content/60 hover:text-primary-content/80 text-sm font-medium hover:bg-primary/20 hover:border-primary/30 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {loading ? (
        <span className="inline-block w-24 h-4 bg-primary/20 rounded animate-pulse" />
      ) : (
        <>
          {version} <span>-</span> {isBeta ? 'Beta' : 'Stable'}
        </>
      )}
      <ChevronRightIcon className="w-5 h-5 ml-1 -mr-1 opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </a>
  );
}
