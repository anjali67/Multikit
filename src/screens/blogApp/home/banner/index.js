import React from 'react';
import {View, Image} from 'react-native';
import {blogImage} from '@utils/images/images';
import style from '../styles';
import TextContainer from './textContainer';

export default function blogBanner() {
  return (
    <View style={style.mainContainer}>
      <Image source={blogImage} style={style.image} />
      <TextContainer />
    </View>
  );
}
