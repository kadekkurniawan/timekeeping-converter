import NumberFormat, { NumberFormatValues } from "react-number-format";

interface TimeInputProps {
    value: string;
    onChange: (time: string) => void;
}

const TimeInput = ({ value, onChange }: TimeInputProps) => {
    const handleInputValueChange = (values: NumberFormatValues) => {
        const { formattedValue: time } = values;

        onChange(time);
    };

    return (
        <NumberFormat
            value={value}
            className="w-full outline-none bg-slate-800 border-t border-slate-700 font-md text-slate-300 py-2 px-4 rounded-md"
            format="##:##"
            placeholder="--:--"
            mask="-"
            onValueChange={handleInputValueChange}
        />
    );
};

export default TimeInput;
