import {
  ModalHeader,
  Image,
  ModalCloseButton,
  ModalBody,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  const ingredients = [];

  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];

    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return ingredients;
};

function RecipeModalContent({ data }: Props) {
  
  const ingredientsWithMeasure = joinIngredients(data);

  return (
    <>
      <ModalHeader>{data?.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
          alt={data.strMeal}
        />
        <Heading mt={4} mb={4} size="md">
          Ingredientes
        </Heading>

        <OrderedList>
          {ingredientsWithMeasure.map((ingredient, index) => (
            <ListItem key={index}>{ingredient}</ListItem>
          ))}
        </OrderedList>

        <Heading mt={4} mb={4} size="md">
          Instrucciones
        </Heading>
        <Text whiteSpace="pre-line" mt={4}>
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
