import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from "@src/theme";

export const Container = styled(LinearGradient).attrs(() => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0 },
}))`
  color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
