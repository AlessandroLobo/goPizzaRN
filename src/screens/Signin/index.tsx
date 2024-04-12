import React from "react";
import { Container } from "./styles";
import { Input } from "@src/components/Input";

export function Signin() {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input
        placeholder="Password"
        type="secondary"
        secureTextEntry
      />

    </Container>
  );
}