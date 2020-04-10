import { List, ListItem, Link } from '@chakra-ui/core'

export const SubMenu = ({ items }) => {
  return (
    <List display="flex" padding={0} fontFamily="heading">
      <ListItem marginRight={3}>Go to Section: </ListItem>
      {items.map((item, i) => (
        <ListItem marginRight={3} key={`${item.label}-${i}`} fontWeight="bold">
          <Link href={item.href} color="gray.800">
            {item.label}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}
