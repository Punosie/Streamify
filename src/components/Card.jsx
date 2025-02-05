import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"

const HCard = ({src, title, description, badges}) => {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Pop":
        return "blue";
      case "Rap":
        return "red";
      case "Jazz":
        return "yellow";
      case "Rock":
        return "green";
      case "Electronic":
        return "pink";
      case "Country":
        return "orange";
      default:
        return "purple"; // Default color for unrecognized genres
    }
  }
  return (
    <Card.Root flexDirection={{base:"column", md:"row"}} maxW="xl" p={5} textAlign="center" alignItems={'center'}>
    <Image  objectFit="cover"  maxW="200px"  src={src}  alt="Album Cover" />
    <Box>
      <Card.Body alignItems={'center'}>
        <Card.Title mb="2">{title}</Card.Title> 
        <Card.Description>
          {description}
        </Card.Description>
        <HStack mt="4">
            {badges?.map((badge, index) => (
            <Badge colorPalette={getBadgeColor(badge)} gap="0" key={index}>{badge}</Badge> // Dynamically render each badge
          ))}
        </HStack>
      </Card.Body>
    </Box>
  </Card.Root>
  )
}

export default HCard;