import LottieViewComponent from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LottieView = styled(LottieViewComponent)`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;
