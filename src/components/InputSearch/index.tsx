import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Icon from '../Icon';
import { BoxIcon, Container, TextInput } from './styles';

interface IInputSearch {
  onSearch: (text: string) => void;
}

const InputSearch: React.FC<IInputSearch> = ({ onSearch }) => {
  const [value, onChangeValue] = useState<string>('');
  const theme = useTheme();

  const onClearText = (): void => {
    onChangeValue('');
  };

  const onSubmit = (): void => {
    onSearch(value);
  };

  return (
    <Container>
      <TextInput
        onChangeText={onChangeValue}
        value={value}
        onSubmitEditing={onSubmit}
      />
      {!!value && (
        <BoxIcon onPress={onClearText}>
          <Icon name="close" size={16} color={theme.white} />
        </BoxIcon>
      )}
    </Container>
  );
};

export default InputSearch;
