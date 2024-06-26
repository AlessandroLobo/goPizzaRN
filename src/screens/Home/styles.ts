import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import theme from "@src/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.BACKGROUND};
`
export const Header = styled(LinearGradient).attrs(() => ({
  colors: theme.COLORS.GRADIENT
}))`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 33}px 24px 58px;
`
export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
  `;

export const GreetingEmoji = styled.Image`
    width: 32px;
    height: 32px;
    margin-right: 12px;
  `;

export const GreetingText = styled.Text`
  font-size: 20px;

  ${({ theme }: { theme: any }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `}
`;

export const MenuHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px 24px 0;
    border-bottom-width: 1px;
    border-bottom-color:${theme.COLORS.SHAPE};
  `

export const MenuItemNumber = styled.Text`
    font-size: 14px;

    ${({ theme }: { theme: any }) => css`
      font-family: ${theme.FONTS.TEXT}; 
      color: ${theme.COLORS.SECONDARY_900};
    `}
  `

  export const Title = styled.Text`
    font-size: 20px;
    line-height: 20px;

    ${({ theme }: { theme: any }) => css`
      font-family: ${theme.FONTS.TITLE};
      color: ${theme.COLORS.SECONDARY_900};
    `}
  `