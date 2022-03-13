import { useState } from 'react'
import { Button, VStack, Code } from '@chakra-ui/react'

export default function ReactiveCounter() {
  const [count, setCount] = useState(0)

  return (
    <VStack align="flex-start" spacing={2}>
      <Button onClick={() => setCount(state => state + 1)}>
        count is: {count}
      </Button>
      <Code>packages/renderer/src/components/ReactiveCounter.tsx</Code>
    </VStack>
  )
}
