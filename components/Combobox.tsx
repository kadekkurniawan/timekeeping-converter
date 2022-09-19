import { useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { listBoxAnimations } from 'lib';
import { MdOutlineCheck, MdOutlineUnfoldMore } from 'react-icons/md';

import { Combobox as HeadlessCombobox } from '@headlessui/react';

import { Minute, Placement, TwelveHour, TwentyFourHour } from 'types';

interface ComboboxProps<T> {
  placement?: Placement;
  items: T[];
  selectedItem?: T;
  onChange: (item: T) => void;
}

const Combobox = <T extends string | Minute | TwentyFourHour | TwelveHour>({
  items,
  selectedItem = items[0],
  onChange,
  placement = 'bottom',
}: ComboboxProps<T>) => {
  const [querySearch, setQuerySearch] = useState('');

  const searchedItems = items.filter((item) =>
    item.toLowerCase().includes(querySearch.toLowerCase()),
  );

  const handleItemSelect = (item: T) => {
    onChange(item);
    setQuerySearch('');
  };

  return (
    <HeadlessCombobox value={selectedItem} onChange={handleItemSelect}>
      {({ open }) => (
        <div className="relative w-full">
          <div className="relative h-fit overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <HeadlessCombobox.Input
              className="w-full border-none font-medium bg-slate-700 text-slate-300 pl-3 rounded pr-10 leading-5"
              onChange={(e) => setQuerySearch(e.target.value)}
            />
            <HeadlessCombobox.Button className="absolute cursor-pointer inset-y-0 right-0 grid place-items-center aspect-square">
              <MdOutlineUnfoldMore
                className={clsx('hover:text-slate-500 hover-transition', {
                  'text-blue': open,
                })}
                aria-hidden="true"
              />
            </HeadlessCombobox.Button>
          </div>

          <AnimatePresence>
            {open && (
              <HeadlessCombobox.Options
                static
                as={motion.div}
                {...listBoxAnimations}
                className={clsx(
                  'absolute scrollbar scrollbar-track-slate-800 scrollbar-thumb-slate-600  max-h-56 w-full overflow-y-auto rounded-lg focus:border-slate-700  bg-slate-700 backdrop-blur z-40 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                  {
                    'top-11 mt-1': placement === 'bottom',
                    'bottom-11 mb-1': placement === 'top',
                  },
                )}
              >
                {searchedItems.length === 0 && querySearch !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-slate-300 text-sm font-medium">
                    Nothing found.
                  </div>
                ) : (
                  searchedItems.map((item, itemIndex) => (
                    <HeadlessCombobox.Option
                      key={itemIndex}
                      className={({ active }) =>
                        clsx(
                          'relative cursor-pointer list-none font-medium select-none py-2 pl-10 pr-2',
                          {
                            'bg-blue-500 text-slate-200': active,
                            'text-slate-300': !active,
                          },
                        )
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <>
                          <span className="block whitespace-nowrap overflow-x-auto">
                            {item}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 grid place-items-center w-10">
                              <MdOutlineCheck
                                className="text-blue-500"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </HeadlessCombobox.Option>
                  ))
                )}
              </HeadlessCombobox.Options>
            )}
          </AnimatePresence>
        </div>
      )}
    </HeadlessCombobox>
  );
};

export default Combobox;
