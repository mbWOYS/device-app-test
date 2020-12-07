module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended", // disables eslint rules covered by ts
        "plugin:@typescript-eslint/recommended", // recommended ts rules
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
            jsx:  true,  // Allows for the parsing of JSX
        },
    },
    rules:  {
        "@typescript-eslint/no-unused-vars": "off", // covered by tsconfig
        "@typescript-eslint/ban-ts-comment": "off", // TODO ---> remove
        "@typescript-eslint/no-explicit-any": "off" // TODO ---> remove
    },
    settings:  {
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};