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
                'dark-background': {
                    '50': '#f4f4f4', 
                    '100': '#e8e8e8', 
                    '200': '#c6c6c6', 
                    '300': '#a4a4a4', 
                    '400': '#606060', 
                    '500': '#1C1C1C', 
                    '600': '#191919', 
                    '700': '#151515', 
                    '800': '#111111', 
                    '900': '#0e0e0e'
                },'dark-useful': {
                    '50': '#ffffff', 
                    '100': '#ffffff', 
                    '200': '#ffffff', 
                    '300': '#ffffff', 
                    '400': '#ffffff', 
                    '500': '#FFFFFF', 
                    '600': '#e6e6e6', 
                    '700': '#bfbfbf', 
                    '800': '#999999', 
                    '900': '#7d7d7d'
                },'dark-secondary': {
                    '50': '#fdfdfd', 
                    '100': '#fbfbfb', 
                    '200': '#f4f4f4', 
                    '300': '#eeeeee', 
                    '400': '#e1e1e1', 
                    '500': '#D4D4D4', 
                    '600': '#bfbfbf', 
                    '700': '#9f9f9f', 
                    '800': '#7f7f7f', 
                    '900': '#686868'
                },'dark-primary': {
                    '50': '#fffaf9', 
                    '100': '#fff5f3', 
                    '200': '#ffe6e0', 
                    '300': '#ffd6cd', 
                    '400': '#ffb8a8', 
                    '500': '#FF9983', 
                    '600': '#e68a76', 
                    '700': '#bf7362', 
                    '800': '#995c4f', 
                    '900': '#7d4b40'
                },'light-background': {
                    '50': '#fefefe', 
                    '100': '#fdfdfd', 
                    '200': '#f9fafb', 
                    '300': '#f5f7f8', 
                    '400': '#eef1f2', 
                    '500': '#E6EBED', 
                    '600': '#cfd4d5', 
                    '700': '#adb0b2', 
                    '800': '#8a8d8e', 
                    '900': '#717374'
                },'light-useful': {
                    '50': '#f6f6f7', 
                    '100': '#ecedef', 
                    '200': '#d0d3d6', 
                    '300': '#b3b8bd', 
                    '400': '#7b838c', 
                    '500': '#424E5A', 
                    '600': '#3b4651', 
                    '700': '#323b44', 
                    '800': '#282f36', 
                    '900': '#20262c'
                },'light-secondary': {
                    '50': '#f7f9fb', 
                    '100': '#eff4f7', 
                    '200': '#d7e3ea', 
                    '300': '#bfd2dd', 
                    '400': '#8fb1c4', 
                    '500': '#5F8FAB', 
                    '600': '#56819a', 
                    '700': '#476b80', 
                    '800': '#395667', 
                    '900': '#2f4654'
                },'light-primary': {
                    '50': '#f3f5f6', 
                    '100': '#e6eaee', 
                    '200': '#c1cbd4', 
                    '300': '#9cabbb', 
                    '400': '#526d87', 
                    '500': '#082E54', 
                    '600': '#07294c', 
                    '700': '#06233f', 
                    '800': '#051c32', 
                    '900': '#041729'
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
    ],
    darkMode: ['class','[data-theme="dark"]'],
}