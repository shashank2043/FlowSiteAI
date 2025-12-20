import React from 'react';

/**
 * Reusable Button component with multiple variants
 * @param {string} variant - Button style variant ('primary' | 'secondary' | 'outlined')
 * @param {string} children - Button text content
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler
 * @param {object} props - Additional props
 */
const Button = ({
    variant = 'primary',
    children,
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = 'px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 inline-block text-center shadow-lg';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-xl hover:shadow-primary-200/50 hover:scale-105 focus:ring-primary-200',
        secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:shadow-xl hover:scale-105 focus:ring-primary-200',
        outlined: 'bg-transparent text-dark-900 border-2 border-dark-900 hover:bg-dark-900 hover:text-white hover:shadow-xl hover:scale-105 focus:ring-dark-700',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
