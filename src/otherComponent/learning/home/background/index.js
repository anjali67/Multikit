import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {smallDesign} from '@utils/images/images';
import {windowHeight} from '@theme/appConstant';
import header from '../header';

export default function background(props) {
  return (
    <View>
      <Image source={smallDesign} style={[styles.imageStyle, props.image]} />
      <View style={styles.container}>{props.content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(195),
    width: '100%',
    resizeMode: 'cover',
  },
  container: {
    position: 'absolute',
  },
});
