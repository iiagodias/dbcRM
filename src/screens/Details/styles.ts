import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  padding: 16px;
`;

export const Image = styled.Image`
  height: 200px;
  border-radius: 8px;
`;

export const BoxInfo = styled.View`
  margin: 16px;
  margin-top: -16px;
  background-color: ${({ theme }) => theme.silver050};
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: bold;
  margin-left: 4px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  font-weight: 400;
  margin-top: 4px;
  margin-left: 4px;
`;

export const BoxText = styled.View`
  flex: 1;
`;

export const BoxRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
