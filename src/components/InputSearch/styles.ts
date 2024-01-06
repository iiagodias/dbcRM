import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 16px;
  background-color: ${({ theme }) => theme.silver050};
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholder: 'Buscar..',
  placeholderTextColor: theme.silver,
}))`
  color: ${({ theme }) => theme.white};
  flex: 1;
`;

export const BoxIcon = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  margin-left: 4px;
`;
