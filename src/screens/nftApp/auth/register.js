import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import AuthTop from '@otherComponent/nft/authTop';
import {t} from 'i18next';
import TextInput from '@otherComponent/nft/textInput';
import nftStyle from '../style';
import {Email} from '@assets/images/nft_theme/svg/mail';
import {LockIcon} from '@assets/images/blog_theme/svg/lock';
import {Referral} from '@assets/images/nft_theme/svg/referral';
import appColors from '../../../theme/appColors';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import BottomView from '@otherComponent/nft/authBottom';
import SocialBtn from '../../hotelBookingApp/auth/socialBtn';
import {useValues} from '@App';
import {dividerImg} from '@utils/images/images';
import AuthBottom from '@otherComponent/grocery/authBottom';
import styles from './styles.js';

export default function nftRegister({navigation}) {
  const [selectCheckBox, setCheckBox] = useState(false);
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();
  const toggleCheckBox = () => {
    setCheckBox(!selectCheckBox);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <AuthTop
        title={t('nft.registration')}
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
      <TextInput
        icon={<Referral color={isDark ? appColors.white : '#777777'} />}
        label={'nft.referralId'}
        placeholder={'14996261261'}
      />
      <View style={[styles.row, {marginTop: 10, flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          onPress={toggleCheckBox}
          style={[
            styles.checkBox,
            {
              backgroundColor: isDark ? appColors.darkTheme : appColors.bgColor,
            },
          ]}>
          {selectCheckBox && (
            <Check width={'19'} height={'19'} color={appColors.foodBtn} />
          )}
        </TouchableOpacity>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Text style={[styles.textStyle, {textAlign: textRTLStyle}]}>
            {t('nft.termsCondition')}{' '}
            <Text style={styles.underLine}>{t('nft.policy')}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.center}>
        <BottomView
          btnTitle={t('onBoarding.Sign up')}
          onBtnPress={() => {
            navigation.navigate('NftLogin');
          }}
          accountText={t('financial.aleradyAccount')}
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
            signTxt={t('hotelBooking.signupWith')}
            onPress={() => {}}
          />
          <SocialBtn NotShowfaceBookBtn />
        </View>
      </View>
    </ScrollView>
  );
}
