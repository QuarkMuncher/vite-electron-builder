import { useState } from 'react'
import { VStack, Input, Text, Code } from '@chakra-ui/react'

export default function ReactiveHash() {
  const [rawString, setRawString] = useState<string>('Hello World!')

  function getHashedString(value: string) {
    return window.nodeCrypto.sha256sum(value)
  }

  return (
    <VStack align="flex-start" spacing={2}>
      <VStack align="left" spacing={0}>
        <Text fontSize="xl">Raw value:</Text>
        <Input value={rawString} onChange={e => setRawString(e.target.value)} />
      </VStack>
      <VStack align="left" spacing={0}>
        <Text fontSize="xl">Hashed by node:crypto:</Text>
        <Text fontSize="md">{getHashedString(rawString)}</Text>
      </VStack>
      <Code>packages/renderer/src/components/ReactiveHash.tsx</Code>
    </VStack>
  )
}
