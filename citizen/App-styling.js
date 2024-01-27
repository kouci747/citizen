import styled from 'styled-components/native';
import {colors} from '../citizen/src/colors';

const {primary, dark} = colors;

export const MainWrapper = styled.SafeAreaView`
  background-color: ${primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CustomView = styled.View`
  background-color: red;
`;
