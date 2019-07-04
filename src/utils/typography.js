import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

const typography = new Typography({
    ...funstonTheme,
    googleFonts: [
        {
            name: 'Patua One',
            styles: ['400'],
        },
        {
            name: 'Roboto Condensed',
            styles: ['400', '700'],
        },
    ],
    bodyFontFamily: ['Roboto Condensed', 'georgia', 'sans-serif'],
})

export const { scale, rhythm, options } = typography
export default typography
