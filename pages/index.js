import { Box, Text, Link as ChakraLink, Icon } from '@chakra-ui/core'
import Link from 'next/link'
import { FaSkullCrossbones, FaHospital, FaNotesMedical } from 'react-icons/fa'

const CategoryBox = ({ children }) => (
  <Box
    display="flex"
    rounded="lg"
    boxShadow="lg"
    width="sm"
    height="sm"
    justifyContent="center"
    backgroundColor="gray.200"
    alignItems="center"
    marginBottom={5}
  >
    {children}
  </Box>
)

const CategoryLink = ({ children, ...rest }) => {
  return (
    <ChakraLink
      display="flex"
      flexDirection="column"
      fontSize="4xl"
      fontFamily="heading"
      color="black"
      alignItems="center"
      fontWeight="bold"
      {...rest}
    >
      {children}
    </ChakraLink>
  )
}

export default function Index() {
  return (
    <>
      <Text display="flex" marginBottom={10}>
        Click category to see data. All data provided by{' '}
        <ChakraLink href="https://covidtracking.com/" display="flex" paddingLeft={1} color="purple.600" isExternal>
          The COVID Tracking Project <Icon name="external-link" marginLeft={1} />
        </ChakraLink>
        .
      </Text>

      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        <CategoryBox>
          <Link href="/deaths" passHref>
            <CategoryLink>
              <Box as={FaSkullCrossbones} />
              Deaths
            </CategoryLink>
          </Link>
        </CategoryBox>

        <CategoryBox>
          <Link href="/hospitalizations" passHref>
            <CategoryLink>
              <Box as={FaHospital} />
              Hospitalizations
            </CategoryLink>
          </Link>
        </CategoryBox>
        <CategoryBox>
          <Link href="/tests" passHref>
            <CategoryLink>
              <Box as={FaNotesMedical} />
              Tests
            </CategoryLink>
          </Link>
        </CategoryBox>
      </Box>
    </>
  )
}
