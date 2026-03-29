import type { AvailableLocale } from '@context/LanguageContext';
import { availableLanguages } from '@context/LanguageContext';
import useClickOutside from '@hooks/useClickOutside';
import useLocale from '@hooks/useLocale';
import { Transition } from '@headlessui/react';
import { LanguageIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const LanguagePicker = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLocale();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useClickOutside(dropdownRef, () => setDropdownOpen(false));

  const handleLanguageChange = (newLocale: AvailableLocale) => {
    setLocale?.(newLocale);
    setDropdownOpen(false);
  };

  return (
    <div className="relative z-10">
      <button
        className={`rounded-lg p-2 hover:bg-primary/70 hover:text-white ${
          isDropdownOpen
            ? 'bg-primary/60 text-primary-content'
            : 'text-primary-content'
        }`}
        aria-label="Language Picker"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <LanguageIcon className="h-6 w-6 md:h-5 md:w-5" />
      </button>

      <Transition
        show={isDropdownOpen}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg"
          ref={dropdownRef}
        >
          <div className="rounded-md bg-base-300/60 backdrop-blur-xl px-3 py-2 ring-1 ring-primary ring-opacity-5">
            <label
              htmlFor="language"
              className="block pb-2 text-sm font-bold leading-5 text-base-content"
            >
              <FormattedMessage
                id="displayLanguage"
                defaultMessage="Display Language"
              />
            </label>
            <select
              id="language"
              className="rounded-md bg-base-200 border-primary ring-primary text-sm w-full"
              onChange={(e) =>
                handleLanguageChange(e.target.value as AvailableLocale)
              }
              value={locale}
            >
              {Object.entries(availableLanguages).map(
                ([key, { code, display }]) => (
                  <option key={key} value={code}>
                    {display}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default LanguagePicker;
