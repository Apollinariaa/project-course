module.exports = {
    semi: true,
    arrowParens: 'avoid', // скобки у одного параметра
    bracketSpacing: true,
    printWidth: 120, // длина строки
    singleQuote: true,
    tabWidth: 4, // отступы
    trailingComma: 'all',
    useTabs: false,
    endOfLine: 'lf',

    importOrder: [
        '^@api/(.*)$',
        '^@customTypes/(.*)$',
        '^@context/(.*)$',
        '^@views/(.*)$',
        '^@controls/(.*)$',
        '^@components/(.*)$',
        '^@hooks/(.*)$',
        '^@scripts/(.*)$',
        '^@images/(.*)$',
        '^@icons/(.*)$',
        '^[./]',
        '^[../]',
    ],

    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
