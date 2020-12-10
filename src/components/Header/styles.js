import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const HEADER_HEIGHT = 150;

export const Container = styled(Animated.View)`
  height: ${HEADER_HEIGHT}px;
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 2;
  background-color: #ffb74d;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text``;
