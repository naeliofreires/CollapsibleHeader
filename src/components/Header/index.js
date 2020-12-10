import * as React from 'react';
import {Text} from 'react-native';

import * as S from './styles';

export const Header = (props) => {
  /**
   * Which can be translated by:
   * "Whenever [Y] equals [X], translateY should equal minus [X]".
   * Here we are fixing the orientation of the header’s translation.
   *
   * const value = diffClamp(value + diff, min, max)
   *
   * This is useful with scroll events, for example,
   * to show the navbar when scrolling  up and to hide it when scrolling down.
   *
   * Which means: "Create a new Animated value that is limited
   * between 2 values (0 and HEADER_HEIGHT).
   *
   * It uses the difference between the last value so even
   * if the value is far from the bounds it will start changing
   * when the value starts getting closer again."
   */

  return (
    <S.Container {...props}>
      <Text>Header</Text>
    </S.Container>
  );
};
