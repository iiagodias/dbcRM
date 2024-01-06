import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px;
`;

export const Image = styled.Image`
  height: 100px;
  border-radius: 8px;
`;

export const BoxRow = styled.View`
  flex-direction: row;
`;

export const BoxImage = styled.View`
  flex: 1;
`;

export const BoxInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BoxText = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.silver050};
  margin-left: -16px;
  border-radius: 4px;
`;

export const BoxSpace = styled.View`
  flex-direction: row;
`;

export const Box = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 11px;
  font-weight: 400;
  margin-top: 4px;
`;
