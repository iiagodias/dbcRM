import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.secondary};
  align-items: center;
  margin-left: 8px;
  justify-content: center;
`;
