/** @type {import('prettier').config} */
const config = {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    //** this might need to be fixed. Google to other solution */
    plugins: [import('prettier-plugin-tailwindcss')],
    tailwindFunctions: ['tv'],
  }

  export default config
