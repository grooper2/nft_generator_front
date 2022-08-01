import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors' 
import { fonts } from './typography'

import { Button } from './components/button'
import { Heading } from './components/heading'
import { TextInput } from './components/input'

export const theme = extendTheme({
    colors,
    fonts,
    components: {
        Button,
        Heading,
        TextInput,
    },
})
