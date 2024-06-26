import theme from "@src/theme";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;      
`

export const Placeholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;     
  justify-content: center;

  border : 1px dashed ${theme.COLORS.SECONDARY_900};
`
export const PlaceholderTitle = styled.Text`
  font-size: 14px;
  text-align: center;

  ${({ theme }: { theme: any }) => css`
    font-family:  ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`