export const Button = {
    baseStyle: {
        fontFamily: 'montserrat',
    },
    sizes: {
        md: {
            fontSize: '14px',
            px: '24px',
            py: '12px',
        },
    },
    variants: {
        socialMedia: {
            bgGradient: 'linear(to-tr, purple.60, blue.60)',
            borderRadius: '20px',
            color: 'white',
            letterSpacing: '1px'
        },
        primary: {
            bg: 'purple.20',
            borderRadius: '4px',
            color: 'white',
            letterSpacing: '1px',
            _hover: {
                bg: 'purple.80'
            }
        }
    },
}