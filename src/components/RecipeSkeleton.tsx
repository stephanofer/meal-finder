import { Container, SkeletonText } from "@chakra-ui/react";

function RecipeSkeleton() {
  return (
    <Container>
      <SkeletonText spacing={4} mt={4} mb={5} noOfLines={1} skeletonHeight={8} />
      <SkeletonText noOfLines={1} skeletonHeight={280} borderRadius={200}/>
      <SkeletonText noOfLines={5} spacing={4} mt={4}/>
    </Container>
  );
}

export default RecipeSkeleton;
