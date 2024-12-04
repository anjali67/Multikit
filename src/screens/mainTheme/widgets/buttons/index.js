import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import mainStyle from '../../style';
import {t} from 'i18next';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useValues} from '@App';

export default function Buttons({navigation}) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.buttons')}
        content={
          <View
            style={[mainStyle.margin, {marginHorizontal: 15, marginTop: 30}]}>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <ButtonView btnText={'mainTheme.buttonTitle'} />
            </View>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <ButtonView
                btnStyle={styles.btn}
                btnText={'mainTheme.buttonTitle1'}
              />
              <ButtonView
                btnStyle={{
                  height: windowHeight(34),
                  width: '48%',
                  left: windowWidth(20),
                }}
                btnText={'mainTheme.buttonTitle2'}
              />
            </View>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <LinearGradient
                colors={['#24695C', '#00261F']}
                style={[styles.buttonView, {width: '50%'}]}
                start={{x: 1, y: 0.2}}
                end={{x: 1, y: 1}}>
                <View>
                  <Text style={styles.text}>{t('mainTheme.buttonTitle3')}</Text>
                </View>
              </LinearGradient>
              <ButtonView
                btnStyle={{
                  height: windowHeight(34),
                  borderRadius: windowHeight(4),
                  width: '38%',
                  left: windowWidth(20),
                }}
                btnText={'mainTheme.buttonTitle4'}
              />
            </View>
            <ButtonView
              btnText={'mainTheme.blockButton'}
              btnStyle={{
                width: '98%',
                height: windowHeight(43),
                borderRadius: windowHeight(10),
              }}
              textStyle={[styles.textStyle, {color: appColors.white}]}
            />
            <ButtonView
              btnText={'mainTheme.outlineButton'}
              btnStyle={styles.btnStyle}
              textStyle={styles.textStyle}
            />
          </View>
        }
      />
    </View>
  );
}

const ButtonView = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.buttonView, props.btnStyle]}>
      <Text style={[styles.text, props.textStyle]}>{t(props.btnText)}</Text>
    </TouchableOpacity>
  );
};
