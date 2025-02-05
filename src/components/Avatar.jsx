import { Avatar, HStack } from "@chakra-ui/react"

const Pfp = ({src}) => {
  return (
    <HStack gap="4">
      <Avatar.Root shape="full" size="lg">
        <Avatar.Fallback name="Random User" />
        <Avatar.Image src={src} />
      </Avatar.Root>
    </HStack>
  )
}

export default Pfp