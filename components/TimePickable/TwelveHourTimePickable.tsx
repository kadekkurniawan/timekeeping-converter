import clsx from 'clsx';
import { AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { zoomAnimations } from 'lib/zoomAnimations';
import { MdOutlineSchedule } from 'react-icons/md';

import { Popover } from '@headlessui/react';

import { MINUTES, TWELVE_HOURS } from 'data/times';
import {
  DropdownPlacement,
  Meridiem,
  Minute,
  TwelveHour,
  TwelveHourTime,
} from 'types';

import Combobox from '../Dropdown/Combobox';
import ListBox from '../Dropdown/ListBox';

interface TwelveHourTimePickableProps {
  initialTime: TwelveHourTime;
  onMinuteChange: (minute: Minute) => void;
  onHourChange: (hour: TwelveHour) => void;
  onMeridiemChange: (meridiem: Meridiem) => void;
  dropdownPlacement: DropdownPlacement;
}

// TODO add framer-motion shared layout between the popover.button and popover.panel

const TwelveHourTimePickable = ({
  onHourChange,
  onMinuteChange,
  initialTime,
  onMeridiemChange,
  dropdownPlacement,
}: TwelveHourTimePickableProps) => {
  const dropdownPlacementOnTop = dropdownPlacement === DropdownPlacement.TOP;
  const dropdownPlacementOnBottom =
    dropdownPlacement === DropdownPlacement.BOTTOM;

  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <Popover.Button className="relative py-2 px-3 rounded-lg group focus:outline-none bg-slate-800 w-full">
            <span className="font-medium text-gray-300">
              {initialTime.hour}:{initialTime.minute} {initialTime.meridiem}
            </span>
            <span
              className={clsx(
                'absolute inset-y-0 aspect-square grid place-items-center',
                {
                  'right-0': dropdownPlacementOnTop,
                  'left-0': dropdownPlacementOnBottom,
                },
              )}
            >
              <MdOutlineSchedule
                size={18}
                aria-hidden="true"
                className="pointer-events-none group-hover:text-slate-500 hover-transition"
              />
            </span>
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <motion.div
                className={clsx(
                  'absolute bg-slate-800/50 left-1/2 -translate-x-1/2 p-4 shadow-lg backdrop-blur rounded-lg z-10',
                  {
                    'bottom-11': dropdownPlacementOnTop,
                    'top-11': dropdownPlacementOnBottom,
                  },
                )}
              >
                <Popover.Panel
                  as={motion.div}
                  {...zoomAnimations}
                  className="flex items-center gap-x-3"
                  static
                >
                  <time className="w-20">
                    <Combobox
                      selectedItem={initialTime.hour}
                      items={TWELVE_HOURS}
                      onChange={onHourChange}
                      dropdownPlacement={dropdownPlacement}
                    />
                  </time>
                  <span className="text-gray-400 cursor-default select-none text-lg">
                    :
                  </span>
                  <time className="w-20">
                    <Combobox
                      selectedItem={initialTime.minute}
                      items={MINUTES}
                      onChange={onMinuteChange}
                      dropdownPlacement={dropdownPlacement}
                    />
                  </time>

                  <ListBox
                    selectedItem={initialTime.meridiem}
                    items={Object.values(Meridiem)}
                    onChange={onMeridiemChange}
                    dropdownPlacement={dropdownPlacement}
                  />
                </Popover.Panel>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};

export default TwelveHourTimePickable;
