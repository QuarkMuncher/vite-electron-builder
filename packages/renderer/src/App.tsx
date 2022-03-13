import {
  ChakraProvider,
  Accordion,
  HStack,
  VStack,
  Link,
  Text,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.svg'
import ReactiveCounter from './components/ReactiveCounter'
import ReactiveHash from './components/ReactiveHash'
import ElectronVersions from './components/ElectronVersions'
import { InfoBox } from './components/molecules'

export default function App() {
  return (
    <ChakraProvider>
      <VStack align="stretch" p="2">
        <HStack justify="center">
          <Image src={logo} alt="" boxSize="sm" />
        </HStack>

        <Text>
          For a guide and recipes on how to configure / customize this project,
          check out the{' '}
          <Link
            href="https://gtihub.com/QuarkMuncher/vite-electron-builder"
            isExternal
          >
            vite-electron-builder documentation <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <Accordion allowToggle>
          <InfoBox title="Test React Reactivity">
            <ReactiveCounter />
          </InfoBox>
          <InfoBox title="Test Node.js API">
            <ReactiveHash />
          </InfoBox>
          <InfoBox title="Environment">
            <ElectronVersions />
          </InfoBox>
        </Accordion>
      </VStack>
    </ChakraProvider>
  )
}
