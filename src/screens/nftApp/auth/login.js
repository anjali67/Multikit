import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import nftStyle from '../../nftApp/style';
import AuthTop from '@otherComponent/nft/authTop';
import {t} from 'i18next';
import TextInput from '@otherComponent/nft/textInput';
import {Email} from '@assets/images/nft_theme/svg/mail';
import {LockIcon} from '@assets/images/blog_theme/svg/lock';
import styles from './styles.js';
import BottomView from '@otherComponent/nft/authBottom';
import AuthBottom from '@otherComponent/grocery/authBottom';
import {dividerImg} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import SocialBtn from '../../hotelBookingApp/auth/socialBtn';

export default function nftLogin({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <AuthTop
        title={t('ecommerceOnBoarding.login')}
        subContent={t('chatting.registerContent')}
      />
      <TextInput
        icon={<Email />}
        label={'chatting.email'}
        placeholder={'nft.emailPlaceholder'}
      />
      <TextInput
        secureTextEntry={true}
        icon={<LockIcon color={isDark ? appColors.white : '#777777'} />}
        label={'signIn.Password'}
        placeholder={'********'}
      />
      <View style={[styles.center, {bottom: 10}]}>
        <BottomView
          btnTitle={t('onBoarding.signIn')}
          onPress={() => {
            navigation.navigate('Verification');
          }}
          onBtnPress={() => {
            navigation.navigate('NftRegister');
          }}
          accountText={t('signIn.createNow')}
        />
        <View></View>
        <View style={styles.margin}>
          <AuthBottom
            divivderImg={dividerImg}
            textStyle={[
              styles.dividerText,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}
            signInContainer={styles.signInContainer}
            signTxt={t('signIn.signInWith')}
            onPress={() => {
              navigation.navigate('NftRegister');
            }}
          />
          <SocialBtn NotShowfaceBookBtn />
        </View>
      </View>
    </ScrollView>
  );
}
