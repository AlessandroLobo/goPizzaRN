import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import theme from "@src/theme";


export const Container = styled.View`
  width: 100%;
  height: 56px;
  border : 1px solid ${theme.COLORS.SHAPE};
  border-radius: 12px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`

export const Size = styled.View`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${theme.COLORS.SHAPE};
  margin-right: 18px;
`

export const Label = styled.Text`
  font-size: 14px;
  ${({ theme }: { theme: any }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`
export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 7px;
`