import Link from 'next/link'
import { ThemeProvider, Divider, List, ListItem, Link as ChakraLink, Box, Heading } from '@chakra-ui/core'
import './app.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Box p={4}>
        <Link href="/" passHref>
          <ChakraLink color="gray.800" fontSize="xl">
            <Heading m={0}>COVID-19 Tracking </Heading>
          </ChakraLink>
        </Link>
        <Box>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default MyApp
