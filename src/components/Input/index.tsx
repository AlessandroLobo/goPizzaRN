import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = TextInputProps & {
  type?: "primary" | "secondary";
}

export function Input({ type = "primary", ...rest }: Props) {
  return (
    <Container type={type} {...rest} />
  );
}