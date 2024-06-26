import styled from "styled-components/native";
import theme from "@src/theme";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { css } from "styled-components";
import { Button } from "@src/components/Button";

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

export const Upload = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 32px 0;
  `

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`

export const Form = styled.View`
  width: 100%;
  padding: 24px;
  
`

export const Label = styled.Text`
  margin-bottom: 12pz;
  font-size: 14px;

  ${({ theme }: { theme: any }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MaxCharacters = styled.Text`
  font-size: 13px;
  margin-bottom: 12px;

  ${({ theme }: { theme: any }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}

`