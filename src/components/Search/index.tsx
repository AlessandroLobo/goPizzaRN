import React from "react";
import {
  Button,
  ButtonClear,
  Container,
  Input,
  InputArea

} from "./styles";
import { Feather } from '@expo/vector-icons'
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";


type Props = TextInputProps & {
  onSearch: () => void
  onClear: () => void
};

export function Search({ onSearch, onClear, ...rest }: Props) {
  const { COLORS } = useTheme();


  return (
    <Container>
      <InputArea>
        <Input placeholder="pesquisar..." {...rest} />
        <ButtonClear onPress={onClear} />
        <Feather name="x" size={16} onPress={onSearch} />
      </InputArea>

      <Button>
        <Feather name="search" size={16} color={COLORS.TITLE} onPress={onSearch} />
      </Button>
    </Container>
  );
}