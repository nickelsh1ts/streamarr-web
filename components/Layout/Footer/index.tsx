import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid';
import { integrations } from '@app/page';
import { FormattedMessage } from '@node_modules/react-intl';

const footerLinks = {
  product: [
    {
      label: <FormattedMessage id="features" defaultMessage="Features" />,
      href: '#features',
    },
    {
      label: (
        <FormattedMessage
          id="gettingStarted"
          defaultMessage="Getting Started"
        />
      ),
      href: 'https://docs.streamarr.dev/getting-started',
    },
    {
      label: (
        <FormattedMessage id="documentation" defaultMessage="Documentation" />
      ),
      href: 'https://docs.streamarr.dev',
    },
    {
      label: <FormattedMessage id="releases" defaultMessage="Releases" />,
      href: 'https://github.com/nickelsh1ts/streamarr/releases',
    },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/nickelsh1ts/streamarr' },
    {
      label: <FormattedMessage id="discussions" defaultMessage="Discussions" />,
      href: 'https://github.com/nickelsh1ts/streamarr/discussions',
    },
    {
      label: (
        <FormattedMessage id="contributing" defaultMessage="Contributing" />
      ),
      href: 'https://github.com/nickelsh1ts/streamarr/blob/develop/CONTRIBUTING.md',
    },
  ],
  integrations: integrations.map((integration) => ({
    label: integration.label,
    href: integration.href,
  })),
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral/30 py-8 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo_sm.png"
                width={36}
                height={36}
                alt="Streamarr Logo"
                unoptimized
              />
              <span className="text-lg font-bold text-white">Streamarr</span>
            </a>
            <p className="text-neutral text-sm mb-4">
              <FormattedMessage
                id="footerDescription"
                defaultMessage="Open-source media management and streaming platform for your Plex and *arr ecosystem."
              />
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/nickelsh1ts/streamarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary/70 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.nickelsh1ts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center text-neutral hover:text-primary/70 transition-colors group"
                aria-label="nickelsh1ts.com"
              >
                  <Image
                    src="/icon/logo_nickelsh1ts.png"
                    width={32}
                    height={32}
                    alt="Nickelsh1ts Logo"
                    unoptimized
                  />
                nickelsh1ts
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div
              key={section}
              className={`${section === 'integrations' ? 'col-span-2 md:col-span-3' : ''}`}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {section}
              </h3>
              <ul
                className={
                  section === 'integrations' ? 'flex flex-wrap gap-4' : ''
                }
              >
                {links.map((link) => (
                  <li key={link.href} className="mb-2">
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith('http') ? '_blank' : undefined
                      }
                      className="text-neutral hover:text-primary/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {section === 'integrations' && (
                  <li key={`${section}-badge`} className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-neutral/20 text-neutral rounded">
                      <FormattedMessage
                        id="+moreSoon"
                        defaultMessage="+ more soon"
                      />
                    </span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm font-light text-neutral mt-8 border-t border-neutral/30 pt-8 pb-10 items-center flex gap-2">
          <HeartIcon className="inline-block w-4 h-4 text-error" />
          Open Source • MIT License
        </p>
      </div>
    </footer>
  );
}
