import React from "react";
import {
  Container,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Header
} from "./styles";
import happyEmoji from '@assets/happy.png'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";




export function Home() {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Ola, Ana!</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>

      </Header>
    </Container>
  );
}