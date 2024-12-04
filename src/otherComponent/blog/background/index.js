import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {blogBg} from '@utils/images/images';
import {windowHeight} from '@theme/appConstant';

export default function backgroundImg(props) {
  return (
    <View style={styles.mainView}>
      <ImageBackground source={blogBg} style={styles.image}>
        <View style={[styles.center, props.center]}>{props.content}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(40),
  },
});
