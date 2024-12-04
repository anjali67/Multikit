import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import styles from '../../styles';

export default function button(props) {
  return (
    <View style={styles.center}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.btnClick}
        style={styles.mainView}>
        <LinearGradient
          colors={[appColors.learningGradiant, appColors.learningGradiant1]}
          style={styles.btn}
          start={{x: 1, y: 0.2}}
          end={{x: 1, y: 1}}>
          <View>
            <Text style={styles.btnText}>{props.btnTitle}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
