import React from 'react';

/**
 * Reusable Card component with hover effects
 * @param {node} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {boolean} hover - Enable hover lift effect
 * @param {object} props - Additional props
 */
const Card = ({
    children,
    className = '',
    hover = true,
    ...props
}) => {
    const baseStyles = 'bg-white rounded-3xl p-8 shadow-xl border border-gray-50/50';
    const hoverStyles = hover ? 'transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
