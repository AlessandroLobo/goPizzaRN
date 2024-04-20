import styled from "styled-components/native";
import theme from "@src/theme";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { css } from "styled-components";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${theme.COLORS.BACKGROUND};
`

export const Header = styled(LinearGradient).attrs(() => ({
  colors: theme.COLORS.GRADIENT
}))`
  width: 100%;  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${getStatusBarHeight() + 33}px 24px 24px;
`;

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }: { theme: any }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `}
  `
export const DeleteLabel = styled.Text`
  font-size: 14px;

  ${({ theme }: { theme: any }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
  `}
  `