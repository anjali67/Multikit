import React from 'react';
import {View, Text} from 'react-native';
import Button from '@commonComponents/button/button';
import nftStyle from '@screens/nftApp/style';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {t} from 'i18next';

export default function buttonView(props) {
  const {isDark} = useValues();
  return (
    <View style={props.buttonView}>
      <Button
        text={t(props.btnTitle)}
        style={[
          nftStyle.buttonStyle,
          {
            backgroundColor: isDark ? appColors.white : appColors.nftBtn,
          },
        ]}
        btnTextStyle={[
          nftStyle.btn,
          {color: isDark ? appColors.nftTitle : appColors.white},
        ]}
        onPress={props.onBtnClick}
      />
    </View>
  );
}
