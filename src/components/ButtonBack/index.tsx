import React from "react";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function ButtonBack({ ...rest }: TouchableOpacityProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <MaterialIcons name="chevron-left" size={18} color={COLORS.TITLE} />
    </Container>
  )
}