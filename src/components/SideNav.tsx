import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  setSelectedCategory: (category: Category) => void;
  selectedCategory: Category;
}; 


const selectedProps = {
  bgColor: 'blue.400',
  color: 'white',
  fontWeight: 'bold',
}


function SideNav({ categories, loading, setSelectedCategory, selectedCategory }: Props) {

  return loading ?  <SkeletonText mt='1' noOfLines={8} spacing='6' skeletonHeight='2' /> : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>

      <VStack align="stretch">
        {categories.map((category) => (
          <Link
          px={2}
          py={1}
          borderRadius={5} 
          _hover={{textDecoration: 'none'}}
          key={category.strCategory}
          {...(selectedCategory.strCategory == category.strCategory && selectedProps)}
          onClick={() => setSelectedCategory(category)}
          >{category.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
