import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { useAuth } from "@hooks/auth";

import brandImg from "@assets/brand.png";

import { Brand, Container, Content, Title, ForgotPasswordButton, ForgotPasswordLabel } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Signin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn, isLogging, forgotPassword } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }
  function handleForgotPassword() {
    forgotPassword(email);
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            placeholder="Password"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel >Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type="primary"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>

  );
}