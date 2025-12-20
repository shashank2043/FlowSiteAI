import React from 'react';

/**
 * Section header with optional label, title, and description
 * @param {string} label - Small label above title
 * @param {string} title - Main section title
 * @param {string} description - Section description
 * @param {string} align - Text alignment ('left' | 'center')
 * @param {string} className - Additional CSS classes
 */
const SectionHeader = ({
    label,
    title,
    description,
    align = 'center',
    className = ''
}) => {
    const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

    return (
        <div className={`${alignmentClass} ${className}`}>
            {label && (
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4 inline-block px-4 py-1.5 bg-primary-50 rounded-full">
                    {label}
                </p>
            )}
            {title && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-tight">
                    {title}
                </h2>
            )}
            {description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
