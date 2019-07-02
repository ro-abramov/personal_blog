import React from 'react'

const langMap = {
    ru: { icon: '🇷🇺', label: 'In Russian' },
    en: { icon: '🇬🇧', label: 'In English' },
}

export function LangIcon({ lang }) {
    const selectedLanguage = langMap[lang]
    return (
        <span role="img" aria-label={selectedLanguage.label}>
            {selectedLanguage.icon}
        </span>
    )
}
