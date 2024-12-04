import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '@commonComponents/button/button';
import financeStyles from '../../styles';
import {t} from 'i18next';
import {useValues} from '@App';

const BottomContainer = props => {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View style={financeStyles.center}>
      <Button
        text={t('otp.Continue')}
        style={[
          financeStyles.btnStyle,
          styles.btnStyle,
         
        ]}
        btnTextStyle={[
          financeStyles.btn,
          styles.btnText,
          {color: isDark ? appColors.white : appColors.gray},
        ]}
        onPress={props.gotoLoginPage}
      />
      <TouchableOpacity onPress={props.gotoLoginPage} activeOpacity={0.9}>
        <Text style={styles.skipText}>{t('onBoarding.Skip')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomContainer;
