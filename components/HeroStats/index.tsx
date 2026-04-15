'use client';
import { useProjectStatsContext } from '@context/ProjectStatsContext';
import { FormattedMessage } from 'react-intl';

export default function HeroStats() {
  const { dockerPulls, stars, loading } = useProjectStatsContext();

  const stats = [
    {
      label: (
        <FormattedMessage id="dockerPulls" defaultMessage="Docker Pulls" />
      ),
      value: dockerPulls,
    },
    {
      label: (
        <FormattedMessage id="githubStars" defaultMessage="GitHub Stars" />
      ),
      value: stars,
    },
  ];

  return (
    <div className="flex gap-6 item-center justify-center">
      {stats.map((stat, idx) => (
        <p
          key={idx}
          className="text-2xl font-extrabold py-2 text-center items-center h-full"
        >
          {loading ? (
            <span className="inline-block w-12 h-7 bg-primary/20 rounded animate-pulse" />
          ) : (
            stat.value
          )}
          <span className="block font-medium text-sm text-neutral">
            {stat.label}
          </span>
        </p>
      ))}
    </div>
  );
}
