import { MdOutlineSyncAlt } from 'react-icons/md';

import {
  TwelveHourTimePickable,
  TwentyFourHourTimePickable,
} from 'components/TimePickable';
import { DropdownPlacement, TwelveHourTime, TwentyFourHourTime } from 'types';

interface TabletAndAboveTimeConverterProps {
  twelveHourTime: TwelveHourTime;
  onTwelveHourTimeChange: (twelveHourTime: TwelveHourTime) => void;
  twentyFourHourTime: TwentyFourHourTime;
  onTwentyFourHourTimeChange: (twentyFourHourTime: TwentyFourHourTime) => void;
}

const TabletAndAboveTimeConverter = ({
  twelveHourTime,
  onTwelveHourTimeChange,
  twentyFourHourTime,
  onTwentyFourHourTimeChange,
}: TabletAndAboveTimeConverterProps) => {
  return (
    <div className="rounded-lg flex gap-x-4 items-end shadow-md p-4">
      <div className="w-52">
        <div className="text-center font-medium text-sm mb-1">24-hour Time</div>
        <TwelveHourTimePickable
          dropdownPlacement={DropdownPlacement.BOTTOM}
          initialTime={twelveHourTime}
          onHourChange={(hour) =>
            onTwelveHourTimeChange({
              ...twelveHourTime,
              hour,
            })
          }
          onMinuteChange={(minute) =>
            onTwelveHourTimeChange({
              ...twelveHourTime,
              minute,
            })
          }
          onMeridiemChange={(meridiem) =>
            onTwelveHourTimeChange({
              ...twelveHourTime,
              meridiem,
            })
          }
        />
      </div>
      <div className="grid h-10 place-items-center">
        <MdOutlineSyncAlt color="#2dd4bf" />
      </div>
      <div className="w-52">
        <div className="text-center font-medium text-sm mb-1">12-hour Time</div>
        <TwentyFourHourTimePickable
          initialTime={twentyFourHourTime}
          onHourChange={(hour) =>
            onTwentyFourHourTimeChange({
              ...twelveHourTime,
              hour,
            })
          }
          onMinuteChange={(minute) =>
            onTwelveHourTimeChange({
              ...twelveHourTime,
              minute,
            })
          }
        />
      </div>
    </div>
  );
};

export default TabletAndAboveTimeConverter;
