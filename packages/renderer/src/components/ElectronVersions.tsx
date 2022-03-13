import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'

export default function ElectronVersions() {
  const versions = Object.entries(window.versions).sort(([key1], [key2]) =>
    key1.localeCompare(key2)
  )

  return (
    <List spacing={2}>
      {versions.map(([lib, ver]) => (
        <ListItem key={lib}>
          <ListIcon as={SmallAddIcon} color="green.500" />
          <strong>{lib}</strong>: {ver}
        </ListItem>
      ))}
    </List>
  )
}
