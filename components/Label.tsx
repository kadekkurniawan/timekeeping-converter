interface LabelProps {
    text: string;
    id: string;
}

const Label = ({ text, id }: LabelProps) => {
    return (
        <label className="text-slate-400 font-medium text-sm" id="id">
            {text}
        </label>
    );
};

export default Label;
