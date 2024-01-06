import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
