import React from 'react';
import {View, Text} from 'react-native';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import RowContainer from '../progressBar/rowContainer';
import Input from '@otherComponent/learning/auth/input';
import TextInput from '@otherComponent/cabBooking/textInput';
import {Atsign} from '@assets/images/ecommerce_theme/svg/atsign';
import {FincncePassword} from '@assets/images/ecommerce_theme/svg/password';
import appColors from '@theme/appColors';
import FoodTextInput from '../../../../otherComponent/food/textInput';
import styles from './inputStyle';
import {useValues} from '@App';
import {windowHeight, windowWidth} from '../../../../theme/appConstant';
import InputContainer from './inputContainer';
import HotelTextInput from '../../../../otherComponent/hotelBooking/auth/textInput';
import InputField from '@otherComponent/grocery/inputField';
import {Mail} from '@assets/images/grocery_assets/svg/mail';
import {Password} from '@assets/images/grocery_assets/svg/password';
import ChatTextInput from '../../../../otherComponent/chatting/textInput';

export default function InputView({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.input')}
        subContent={t('mainTheme.inputContent')}
        imageStyle={{
          height: windowHeight(940),
          width: windowWidth(200),
          resizeMode: 'contain',
        }}
        content={
          <View style={[mainStyle.margin, {marginHorizontal: 0}]}>
            <RowContainer
              title={'mainTheme.shadowForm'}
              containerStyle={{marginHorizontal: 5}}
            />
            <Input
              containerStyle={{marginTop: 7}}
              label={'chatting.email'}
              placeholder={'hotelBooking.enterEmail'}
              margin={{marginTop: 7}}
              textContentType={"email-address"}
              keyboardType={"email-address"}
          
            />
            <Input
              margin={{marginTop: 5}}
              containerStyle={{marginTop: 13}}
              label={'signIn.Password'}
              placeholder={'signIn.Password'}
              secureTextEntry={true}
            />
            <InputContainer
              title={'mainTheme.borderForm'}
              textInputView={
                <>
                  <TextInput
                    placeholder={t('signIn.Email Address')}
                    icon={
                      <Atsign strokeWidth={1.8} color={appColors.foodContent} />
                    }
                    keyboardType={"email-address"}
                    
                  />
                  <TextInput
                    placeholder={t('signIn.Password')}
                    icon={
                      <FincncePassword
                        strokeWidth={1.8}
                        color={appColors.foodContent}
                      />
                    }
                    secureTextEntry={true}
                  />
                </>
              }
            />
            <InputContainer
              title={'mainTheme.classicForm'}
              textInputView={
                <>
                  <Text style={styles.text}>{t('signIn.phoneNumber')}</Text>
                  <FoodTextInput
                    placeholder={t('signIn.enterPhone')}
                    keyboardType={'numeric'}
                  />
                  <Text style={styles.text}>{t('signIn.Password')}</Text>
                  <FoodTextInput secureTextEntry={true} placeholder={t('fitness.enterPassword')} />
                </>
              }
            />
            <InputContainer
              title={'mainTheme.labelForm'}
              textInputView={
                <View style={styles.center}>
                  <HotelTextInput
                    bgColor={appColors.white}
                    label={t('hotelBooking.emailId')}
                    placeholder={t('hotelBooking.enterEmail')}
                    keyboardType={"email-address"}
                  />
                  <HotelTextInput
                    bgColor={appColors.white}
                    label={t('signIn.Password')}
                    placeholder={t('ecommerceAuth.passwordPlaceholder')}
                    secureTextEntry={true}
                  />
                </View>
              }
            />
            <InputContainer
              title={'mainTheme.iconForm'}
              textInputView={
                <>
                  <View style={styles.center}>
                    <InputField
                      placeholder={t('signIn.Email Address')}
                      icon={<Mail />}
                      keyboardType={"email-address"}
                    />
                    <InputField
                      placeholder={t('signIn.Password')}
                      icon={<Password />}
                      secureTextEntry={true}
                    />
                  </View>
                </>
              }
            />
            <InputContainer
              title={'mainTheme.borderLabelForm'}
              textInputView={
                <View style={{marginTop: 10}}>
                  <ChatTextInput
                    inputRow={styles.inputStyle}
                    label={'chatting.name'}
                    placeholder={'chatting.yourName'}
                  />
                  <ChatTextInput
                    inputRow={styles.inputStyle}
                    label={'chatting.email'}
                    placeholder={'chatting.yourEmailId'}
                    keyboardType={"email-address"}
                  />
                </View>
              }
            />
          </View>
        }
      />
    </View>
  );
}
