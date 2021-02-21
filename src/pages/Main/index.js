import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

import Counter from '~/components/Counter';

const Main = () => (
  <Counter 
    playTime={5} 
    interval={35}
  />
);

export default Main;
