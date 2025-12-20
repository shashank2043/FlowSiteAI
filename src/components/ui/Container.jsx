import React from 'react';

/**
 * Max-width container wrapper with responsive padding
 * @param {node} children - Container content
 * @param {string} className - Additional CSS classes
 * @param {string} maxWidth - Maximum width variant ('default' | 'wide' | 'narrow')
 */
const Container = ({
    children,
    className = '',
    maxWidth = 'default'
}) => {
    const maxWidths = {
        narrow: 'max-w-4xl',
        default: 'max-w-7xl',
        wide: 'max-w-[1400px]',
    };

    return (
        <div className={`${maxWidths[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
