import React from 'react';
import {View, Text} from 'react-native';
import nftStyle from '../../nftApp/style';
import AuthTop from '@otherComponent/nft/authTop';
import {Email} from '@assets/images/nft_theme/svg/mail';
import TextInput from '@otherComponent/nft/textInput';
import {t} from 'i18next';
import ButtonView from '@otherComponent/nft/button';
import style from '../style';
import {useValues} from '@App';
import appColors from '../../../theme/appColors';

export default function verification({navigation}) {
  const {setIsDark, isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <AuthTop
        title={t('financial.verification')}
        subContent={t('nft.verificationContent')}
      />
      <View style={style.blankView}></View>
      <TextInput
        icon={<Email />}
        label={'nft.verificationCode'}
        placeholder={'nft.digitCode'}
      />
      <View style={style.center}>
        <ButtonView
          buttonView={{bottom: 10}}
          onBtnClick={() => {
            navigation.navigate('NftDrawer');
          }}
          btnTitle={'nft.proceed'}
        />
        <View style={style.row}>
          <Text style={style.resendText}>{t('nft.resendCode')}</Text>
          <Text style={style.time}> 0.20</Text>
        </View>
      </View>
    </View>
  );
}
