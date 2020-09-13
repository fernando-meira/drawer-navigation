import styled from 'styled-components/native';

import colors from '../../themes/colors';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background: ${colors.background};
`;

export const TextContainer = styled.Text`
  font-size: 32px;
  color: ${colors.whiteTextColor};
`;
