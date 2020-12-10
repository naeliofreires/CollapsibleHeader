import React from 'react';
import {SafeAreaView, StatusBar, Image} from 'react-native';
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {Header} from './components/Header';

const _array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66, 77];
const _imageStyle = {width: '100%', height: 200, marginTop: 50};

const App = () => {
  let sharedValue = useSharedValue(150);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      sharedValue.value = event.contentOffset.y;
    },
  });

  const stylez = useAnimatedStyle(() => {
    /**
      CLAMP = 'clamp',
      EXTEND = 'extend',
      IDENTITY = 'identity',
     */
    let height = interpolate(
      sharedValue.value,
      [0, 150],
      [150, 50],
      Animated.Extrapolate[sharedValue.value > 150 ? 'CLAMP' : 'EXTEND'],
    );

    return {
      height,
    };
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header style={[{}, stylez]} />
        <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
          {_array.map((img, idx) => (
            <Image
              key={String(idx)}
              style={_imageStyle}
              source={{uri: 'https://picsum.photos/200/300'}}
            />
          ))}
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
