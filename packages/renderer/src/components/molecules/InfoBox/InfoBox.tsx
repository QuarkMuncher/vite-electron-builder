import {
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading
} from '@chakra-ui/react'
import type { ReactChild } from 'react'

interface Props {
  children: ReactChild | ReactChild[]
  title: string
}

export default function InfoBox({ children, title }: Props) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading as="h2" size="md">
            {title}
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  )
}
