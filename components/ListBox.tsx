import { useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { type } from 'os';
import { MdCheck, MdOutlineUnfoldMore } from 'react-icons/md';

import { Listbox } from '@headlessui/react';

import { Meridiem, Minute, TwelveHour, TwentyFourHour } from '../types';
import ZoomTransition from './ZoomTransition';

type Placement = 'top' | 'bottom';

interface ListBoxProps<T> {
    selectedItem: T;
    items: T[];
    placement?: Placement;
    onChange: (value: T) => void;
}

const listVariants: Variants = {
    hidden: (originPlacement: Placement) => ({
        opacity: 0,
        height: 0,
    }),
    open: (originPlacement: Placement) => ({
        opacity: 1,
        height: 'fit-content',
    }),
};

const ListBox = <T extends Minute | TwelveHour | TwentyFourHour | Meridiem>({
    selectedItem,
    items,
    placement = 'bottom',
    onChange,
}: ListBoxProps<T>) => {
    return (
        <div className="relative">
            <Listbox value={selectedItem} onChange={onChange}>
                {({ open }) => (
                    <>
                        <Listbox.Button className="relative focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 w-full cursor-pointer rounded-lg bg-slate-700 py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
                            <span className="block truncate text-gray-300">
                                {selectedItem}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <MdOutlineUnfoldMore
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial="hidden"
                                    animate="open"
                                    exit="hidden"
                                    transition={{
                                        stiffness: 100,
                                    }}
                                    custom={
                                        placement === 'bottom'
                                            ? 'top'
                                            : 'bottom'
                                    }
                                    variants={listVariants}
                                    className={clsx(
                                        'absolute max-h-60 w-full overflow-auto rounded-lg bg-slate-700 backdrop-blur-sm shadow-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                                        {
                                            'top-11': placement === 'bottom',
                                            'bottom-11': placement === 'top',
                                        },
                                    )}
                                >
                                    <Listbox.Options static>
                                        {items.map((item, itemIndex) => (
                                            <Listbox.Option
                                                key={itemIndex}
                                                className={({ active }) =>
                                                    `relative cursor-pointer  select-none text-right py-2 pr-2 ${
                                                        active
                                                            ? 'bg-slate-600 text-gray-200'
                                                            : ' text-gray-300'
                                                    }`
                                                }
                                                value={item}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span>{item}</span>
                                                        {selected && (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-blue-500">
                                                                <MdCheck
                                                                    className="w-4 h-4"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </Listbox>
        </div>
    );
};

export default ListBox;
