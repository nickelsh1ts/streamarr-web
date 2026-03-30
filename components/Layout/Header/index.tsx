'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import useClickOutside from '@hooks/useClickOutside';
import { FormattedMessage } from '@node_modules/react-intl';
import LanguagePicker from '@components/LanguagePicker';

const quickLinks = [
  {
    label: (
      <FormattedMessage id="documentation" defaultMessage="Documentation" />
    ),
    href: 'https://docs.streamarr.dev',
  },
  {
    label: <FormattedMessage id="apiDocs" defaultMessage="API Docs" />,
    href: 'https://api-docs.streamarr.dev',
  },
  {
    label: <FormattedMessage id="github" defaultMessage="GitHub" />,
    href: 'https://github.com/nickelsh1ts/streamarr',
  },
];

const MenuLinks = () => {
  return (
    <>
      {quickLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 md:py-2 text-sm font-medium text-white rounded-lg hover:bg-primary/60"
        >
          {link.label}
        </a>
      ))}
      <a
        href="https://docs.streamarr.dev/getting-started"
        target="_blank"
        rel="noopener noreferrer"
        className="max-md:mt-2 md:ml-4 inline-block rounded-lg bg-primary px-4 py-3 md:py-2 text-sm font-medium text-white hover:bg-primary/60 text-center"
      >
        <FormattedMessage id="getStarted" defaultMessage="Get Started" />
      </a>
    </>
  );
};

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <header className="w-full items-center justify-between p-8 max-w-7xl mx-auto relative z-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo_full.png"
              width={200}
              height={20}
              alt="Streamarr Logo"
              unoptimized
            />
          </a>
        </div>
        <div className="hidden md:flex flex-col md:flex-row md:items-center gap-2 md:gap-1">
          <LanguagePicker />
          <MenuLinks />
        </div>
        <div className="md:hidden flex gap-2 items-center">
          <LanguagePicker />
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 bg-base-200/60 backdrop-blur rounded-lg hover:text-white hover:bg-neutral/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all"
            onClick={() => setIsOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="w-7 h-7" />
          </button>
        </div>
      </nav>
      <div ref={ref} className="absolute inset-x-0 top-0 z-50 p-4 md:hidden">
        <Transition show={isOpen}>
          <div className="overflow-hidden bg-base-300/80 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-primary/50 transition-all duration-500 max-h-screen data-closed:max-h-0">
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-primary/50">
              <a href="#" className="flex items-center gap-3">
                <Image
                  src="/logo_full.png"
                  width={200}
                  height={20}
                  alt="Streamarr Logo"
                  unoptimized
                />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-neutral rounded-lg hover:text-white hover:bg-neutral/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all"
                aria-label="Close main menu"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-1 px-3 py-4">
              <MenuLinks />
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
}
