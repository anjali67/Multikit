import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import foodOrderStyle from '../../style/styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function SocialLogin(props) {
  const {isDark} = useValues();

  return (
    <View style={foodOrderStyle.center}>
      <View style={styles.container}>
        <View
          style={[
            styles.boxView,

            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
            props.boxContainer,
          ]}>
          <Image
            tintColor={props.tintColor}
            source={props.image}
            style={[styles.image, props.imageStyle]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(8),
  },
  boxView: {
    height: windowHeight(53),
    width: windowWidth(75),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(13),
    elevation: 1,
  },
  image: {
    height: windowHeight(45),
    width: windowWidth(40),
    resizeMode: 'contain',
  },
});
