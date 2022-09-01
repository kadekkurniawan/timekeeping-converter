interface ButtonPrimaryProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonPrimary = ({ text, onClick }: ButtonPrimaryProps) => {
    return (
        <button
            className="text-sm text-gray-200 rounded-md whitespace-nowrap bg-blue-500 py-2 px-3"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ButtonPrimary;
