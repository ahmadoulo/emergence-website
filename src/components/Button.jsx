const Button = ({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
    fullWidth = false,
    className = ''
}) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
