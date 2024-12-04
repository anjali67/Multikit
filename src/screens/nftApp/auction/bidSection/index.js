import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from '../../style';
import {Incdec} from '@assets/images/nft_theme/svg/incdec';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function bidSection() {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View style={[style.marginHorizontal, {flexDirection: viewRTLStyle}]}>
      <View
        style={[
          style.row,
          {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: viewRTLStyle,
          },
        ]}>
        <View style={{marginLeft: 10}}>
          <Incdec />
        </View>
        <View style={style.textView}>
          <Text style={[style.text, {textAlign: textRTLStyle}]}>
            {t('nft.yourBid')}
          </Text>
          <TextInput
            placeholder={'0.075'}
            style={[style.textInput, {textAlign: textRTLStyle}]}
          />
        </View>
      </View>
      <View>
        <DownArrow color={appColors.cabContent} />
      </View>
    </View>
  );
}
