import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {VideoHide} from '@assets/images/chat_theme/svg/videoHide';
import {LeftRotate} from '@assets/images/chat_theme/svg/leftRotate';
import CallBg from '../callBg';
import {vidoImage, vidoImage1} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default function videoCalling({navigation}) {
  return (
    <View>
      <CallBg
        navigation={navigation}
        bgImag={vidoImage}
        icon={<VideoHide />}
        icon1={<LeftRotate />}
        content={
          <View style={styles.container}>
            <Image source={vidoImage1} style={styles.image} />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: windowHeight(8),
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(100),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(15),
  },
});
