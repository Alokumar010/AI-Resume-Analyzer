const Button = ({ children, onClick, disabled }) => {
    return (

        <button
            onClick={onClick}
            disabled={disabled}
            className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-white
                font-semibold
                transition
                duration-300
                hover:bg-blue-700
                disabled:opacity-50
            "
        >
            {children}
        </button>

    );
};

export default Button;