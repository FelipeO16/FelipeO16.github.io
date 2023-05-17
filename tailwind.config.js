/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'stores/*.ts',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
    ],
    theme: {
        extend: {
            colors: {
                'background': {
                    '50': '#f4f4f4', 
                    '100': '#e9e9e9', 
                    '200': '#c7c7c7', 
                    '300': '#a5a5a5', 
                    '400': '#626262', 
                    '500': '#1E1E1E', 
                    '600': '#1b1b1b', 
                    '700': '#171717', 
                    '800': '#121212', 
                    '900': '#0f0f0f'
                },'secondary': {
                    '50': '#fafafa', 
                    '100': '#f4f4f4', 
                    '200': '#e4e4e4', 
                    '300': '#d4d4d4', 
                    '400': '#b3b3b3', 
                    '500': '#939393', 
                    '600': '#848484', 
                    '700': '#6e6e6e', 
                    '800': '#585858', 
                    '900': '#484848'
                },'primary': {
                    '50': '#f6fafe', 
                    '100': '#edf4fd', 
                    '200': '#d2e4fa', 
                    '300': '#b6d4f7', 
                    '400': '#80b4f1', 
                    '500': '#4994EB', 
                    '600': '#4285d4', 
                    '700': '#376fb0', 
                    '800': '#2c598d', 
                    '900': '#244973'
                }
            }
        },
    },
    plugins: [],
    safelist: [
        'whitelisted',
        {
            pattern: /border-(white|black)/
        },
        {
            pattern: /text-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
        },
        {
            pattern: /border-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
        },
        {
            pattern: /bg-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
        },
    ]
}