import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { IoMdSearch } from "react-icons/io";
import { SearchForm } from "../types";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();

  return (
    <Container maxW="3xl" mt="1px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray" />
          </InputLeftElement>
          <Input
            focusBorderColor={formState.errors.search ? "crimson" : "blue.400"}
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="tel"
            placeholder="Intenta con 'Chicken o 'Beans'..."
            mr={2}
          />
          <Button type="submit" bgColor="blue.400" color='white' >
            Enviar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
