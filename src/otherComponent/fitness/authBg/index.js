import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {fitnessAuthBg} from '@utils/images/images';
import {t} from 'i18next';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@App';

export default function authBg(props) {
  const {viewRTLStyle, isRTL, textRTLStyle} = useValues();
  return (
    <View>
      <ImageBackground style={styles.image} source={fitnessAuthBg}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.containerView}>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <View style={styles.vertical}></View>
              <View>
                <Text
                  style={[
                    styles.title,
                    {
                      textAlign: textRTLStyle,
                      marginHorizontal: isRTL ? 20 : null,
                    },
                  ]}>
                  {t('fitness.unfold')}
                </Text>
                <Text
                  style={[
                    styles.content,
                    {marginHorizontal: isRTL ? 20 : null},
                  ]}>
                  {t('fitness.onBoardingContent')}
                </Text>
              </View>
            </View>
            {props.content}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
