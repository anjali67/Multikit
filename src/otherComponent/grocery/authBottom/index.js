import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {divider} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function AuthBottom(props) {
  const {isDark} = useValues();
  return (
    <View>
      {props.txt && (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
          <Text style={styles.createAcc}>{props.txt}</Text>
        </TouchableOpacity>
      )}
      <View style={[styles.signInView, props.signInContainer]}>
        <Image
          tintColor={props.tintColor && props.tintColor}
          source={props.divivderImg ? props.divivderImg : divider}
          style={styles.img}
        />
        <Text
          style={[
            styles.signIn,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
            props.textStyle,
          ]}>
          {props.signTxt}
        </Text>
      </View>
    </View>
  );
}
