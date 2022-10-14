import { MdOutlineSyncAlt } from 'react-icons/md';

import {
  TwelveHourTimePickable,
  TwentyFourHourTimePickable,
} from 'components/TimePickable';
import { DropdownPlacement, TwelveHourTime, TwentyFourHourTime } from 'types';

interface MobileTimeConverterProps {
  twelveHourTime: TwelveHourTime;
  onTwelveHourTimeChange: (twelveHourTime: TwelveHourTime) => void;
  twentyFourHourTime: TwentyFourHourTime;
  onTwentyFourHourTimeChange: (twentyFourHourTime: TwentyFourHourTime) => void;
}

const MobileTimeConverter = ({
  twelveHourTime,
  onTwelveHourTimeChange,
  twentyFourHourTime,
  onTwentyFourHourTimeChange,
}: MobileTimeConverterProps) => {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg shadow-md p-4">
      <div className="w-52">
        <div className="text-center mb-1 font-medium text-sm">12-hour Time</div>

        <TwelveHourTimePickable
          dropdownPlacement={DropdownPlacement.TOP}
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
      <div className="grid place-items-center">
        <MdOutlineSyncAlt color="#2dd4bf" />
      </div>
      <div className="w-52">
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
        <div className="text-center font-medium mt-1 text-sm">24-hour Time</div>
      </div>
    </div>
  );
};

export default MobileTimeConverter;
