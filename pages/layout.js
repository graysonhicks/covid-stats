import Link from 'next/link'
import { Divider, List, ListItem, Link as ChakraLink } from '@chakra-ui/core'

const MainLink = ({ label, href }) => {
  return (
    <ListItem marginRight={2}>
      <Link href={href} passHref>
        <ChakraLink color="gray.800" fontSize="xl" rounded="lg" boxShadow="lg" backgroundColor="gray.200" padding={2}>
          {label}
        </ChakraLink>
      </Link>
    </ListItem>
  )
}

export const Layout = ({ children }) => (
  <>
    <List display="flex" padding={0} fontFamily="heading">
      <MainLink label="Deaths" href="/deaths" />
      <MainLink label="Hospitalizations" href="/hospitalizations" />
      <MainLink label="Tests" href="/tests" />
    </List>
    <Divider />
    {children}
  </>
)
