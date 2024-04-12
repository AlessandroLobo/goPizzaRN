import styled, { css } from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import theme from "@src/theme";
import { TouchableOpacity } from "react-native";

export type TypeProps = "primary" | "secondary";

type ContainerProps = {
  type: TypeProps
}



export const Container = styled(TouchableOpacity) <ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;


  background-color: ${({ theme, type }: { theme: any, type: TypeProps }) => type === 'primary' ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_800};
`;


export const Title = styled.Text`
   font-size: 14px;

  ${({ theme }: { theme: any }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Load = styled.ActivityIndicator`
  color: ${theme.COLORS.TITLE}
`;
