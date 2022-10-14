import { AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { zoomAnimations } from 'lib/zoomAnimations';
import { MdOutlineSchedule } from 'react-icons/md';

import { Popover } from '@headlessui/react';

import { MINUTES, TWENTY_FOUR_HOURS } from 'data/times';
import { Minute, TwentyFourHour, TwentyFourHourTime } from 'types';

import Combobox from '../Dropdown/Combobox';

interface TwentyFourHourTimePickableProps {
  initialTime: TwentyFourHourTime;
  onMinuteChange: (minute: Minute) => void;
  onHourChange: (hour: TwentyFourHour) => void;
}

const TwentyFourHourTimePickable = ({
  onHourChange,
  onMinuteChange,
  initialTime,
}: TwentyFourHourTimePickableProps) => {
  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <Popover.Button className="relative py-2 px-3 rounded-lg focus:outline-none group bg-slate-800 w-full">
            <span className="font-medium text-gray-300">
              {initialTime.hour}:{initialTime.minute}
            </span>
            <span className="absolute right-0 inset-y-0 aspect-square grid place-items-center">
              <MdOutlineSchedule
                size={18}
                className="pointer-events-none group-hover:text-slate-500 hover-transition"
              />
            </span>
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <div className="absolute bg-slate-800/50 left-1/2 w-fit top-11 -translate-x-1/2 p-4 shadow-lg backdrop-blur rounded-lg z-10">
                <motion.div {...zoomAnimations}>
                  <Popover.Panel className="flex items-center gap-x-3" static>
                    <div className="w-20">
                      <Combobox
                        selectedItem={initialTime.hour}
                        items={TWENTY_FOUR_HOURS}
                        onChange={onHourChange}
                      />
                    </div>
                    <span className="text-gray-400 select-none cursor-default text-lg">
                      :
                    </span>
                    <div className="w-20">
                      <Combobox
                        selectedItem={initialTime.minute}
                        items={MINUTES}
                        onChange={onMinuteChange}
                      />
                    </div>
                  </Popover.Panel>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};

export default TwentyFourHourTimePickable;
