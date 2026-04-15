'use client';
import { createContext, useContext } from 'react';
import useProjectStats, { type ProjectStats } from '@hooks/useProjectStats';

const ProjectStatsContext = createContext<ProjectStats | null>(null);

export function ProjectStatsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const stats = useProjectStats();
  return (
    <ProjectStatsContext.Provider value={stats}>
      {children}
    </ProjectStatsContext.Provider>
  );
}

export function useProjectStatsContext(): ProjectStats {
  const ctx = useContext(ProjectStatsContext);
  if (!ctx) {
    throw new Error(
      'useProjectStatsContext must be used within <ProjectStatsProvider>'
    );
  }
  return ctx;
}
