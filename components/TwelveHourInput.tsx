import { AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { zoomAnimations } from 'lib/zoomAnimations';
import { MdOutlineSchedule } from 'react-icons/md';

import { Popover } from '@headlessui/react';

import { MINUTES, TWELVE_HOURS } from 'data/times';
import { Meridiem, Minute, TwelveHour, TwelveHourTime } from 'types';

import Combobox from './Combobox';
import ListBox from './ListBox';

interface TwelveHourInputProps {
  initialTime: TwelveHourTime;
  onChangeMinute: (minute: Minute) => void;
  onChangeHour: (hour: TwelveHour) => void;
  onChangeMeridiem: (meridiem: Meridiem) => void;
}

const TwelveHourInput = ({
  onChangeHour,
  onChangeMinute,
  initialTime,
  onChangeMeridiem,
}: TwelveHourInputProps) => {
  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <Popover.Button className="relative py-2 px-3 rounded-lg focus:outline-none bg-slate-800 w-full">
            <span className="font-medium text-gray-300">
              {initialTime.hour}:{initialTime.minute} {initialTime.meridiem}
            </span>
            <span className="absolute right-0 inset-y-0 aspect-square grid place-items-center">
              <MdOutlineSchedule className="pointer-events-none" />
            </span>
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute bg-slate-800/50 left-1/2 -translate-x-1/2 p-4 shadow-lg backdrop-blur top-12 rounded-lg z-10"
                {...zoomAnimations}
                custom="top"
              >
                <Popover.Panel className="flex items-center gap-x-3" static>
                  <div className="w-20">
                    <Combobox
                      selectedItem={initialTime.hour}
                      items={TWELVE_HOURS}
                      onChange={onChangeHour}
                    />
                  </div>
                  <span className="text-gray-400 cursor-default select-none text-lg">
                    :
                  </span>
                  <div className="w-20">
                    <Combobox
                      selectedItem={initialTime.minute}
                      items={MINUTES}
                      onChange={onChangeMinute}
                    />
                  </div>

                  <ListBox
                    selectedItem={initialTime.meridiem}
                    items={Object.values(Meridiem)}
                    onChange={onChangeMeridiem}
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

export default TwelveHourInput;
