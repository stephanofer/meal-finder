import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import RecipeSkeleton from "./RecipeSkeleton";
import {MealDetails } from "../types";
import RecipeModalContent from "./RecipeModalContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  data: MealDetails | undefined;
}

function RecipeModal({isOpen, onClose, loading, data}: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
            {loading ? <RecipeSkeleton/> : data && <RecipeModalContent data={data} /> }
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RecipeModal;
