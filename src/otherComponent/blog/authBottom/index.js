import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './styles';
import {t} from 'i18next';
import blogStyle from '../../../screens/blogApp/style';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function authBottom(props) {
  const {isDark} = useValues();
  return (
    <View>
      {props.showForgotPassword && (
        <View style={style.forgotView}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={[
                style.forgotText,
                {color: isDark ? appColors.white : appColors.fontColor},
              ]}>
              {t('signIn.Forgot password?')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={blogStyle.center}>
        <Button
          text={t(props.btnTitle)}
          style={[
            blogStyle.buttonStyle,
            style.buttonView,
            {
              backgroundColor: isDark ? appColors.white : appColors.fontColor,
            },
          ]}
          btnTextStyle={[
            blogStyle.btn,
            {color: isDark ? appColors.fontColor : appColors.white},
          ]}
          onPress={props.onBtnClick}
        />
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={props.onBtnPress}>
        <Text
          style={[
            style.text,
            {color: isDark ? appColors.blackColor : appColors.white},
          ]}>
          {t(props.createNowText)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
