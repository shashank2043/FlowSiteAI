import React from 'react';

/**
 * Small badge component for labels like "Free", "Popular", category tags
 * @param {string} children - Badge text
 * @param {string} variant - Badge color variant ('default' | 'primary' | 'success' | 'info')
 * @param {string} className - Additional CSS classes
 */
const Badge = ({
    children,
    variant = 'default',
    className = ''
}) => {
    const baseStyles = 'inline-block px-4 py-1.5 rounded-full text-sm font-semibold';

    const variants = {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-dark-900 text-white',
        success: 'bg-green-100 text-green-800',
        info: 'bg-pastel-blue text-dark-900',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
