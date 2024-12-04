import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useValues} from '@App';
import financeStyles from '../../../styles';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import styles from './styles';

export default function authBottom(props) {
  const {isDark} = useValues();
  return (
    <View style={financeStyles.center}>
      <Button
        text={props.btnTitle}
        style={[
          financeStyles.btnStyle,
          props.btnStyle,
          
        ]}
        btnTextStyle={[
          financeStyles.btn,
          {color: isDark ? appColors.white : appColors.gray},
        ]}
        onPress={props.goToHomePage}
      />
      <TouchableOpacity activeOpacity={0.9} onPress={props.gotoScreen}>
        <Text style={styles.createNow}>{props.accountText}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.borderHalf} />
        <Text
          style={[
            styles.orText,
            {
              backgroundColor: isDark
                ? appColors.financeDarkBg
                : appColors.gradient2,
            },
          ]}>
          {props.content}
        </Text>
        <View style={styles.borderHalf} />
      </View>
    </View>
    </View>
  );
}
