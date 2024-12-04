import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {exerciseImg} from '@utils/images/images';
import styles from '../../styles';
import fitnessStyle from '../../../style';
import {VideoVolume} from '@assets/images/fitness_theme/svg/volume';
import {windowHeight} from '@theme/appConstant';
import {Back} from '@assets/images/chat_theme/svg/Back';
import appColors from '@theme/appColors';
import {BackPlayer} from '@assets/images/fitness_theme/svg/backPlayer';
import {t} from 'i18next';
import {ForwardPlayer} from '@assets/images/fitness_theme/svg/forward';
import {Pause} from '@assets/images/fitness_theme/svg/pause';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/hotel_theme/svg/rightArrow';

export default function videos({navigation}) {
  const {viewRTLStyle, isRTL} = useValues();
  return (
    <View style={fitnessStyle.container}>
      <View>
        <Image source={exerciseImg} style={styles.backgroundImg} />
        <View
          style={[
            styles.bottomContainer,
            {marginTop: 10, flexDirection: viewRTLStyle},
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.goBack();
            }}>
            {isRTL ? (
              <RightArrow color={appColors.white} />
            ) : (
              <Back color={appColors.white} />
            )}
          </TouchableOpacity>
          <Text style={styles.title}>{t('fitness.armCircle')}</Text>
          <VideoVolume />
        </View>
        <View
          style={[
            styles.bottomContainer,
            {
              bottom: windowHeight(40),
              justifyContent: 'space-around',
            },
          ]}>
          <BackPlayer />
          <Pause />
          <ForwardPlayer />
        </View>
      </View>
    </View>
  );
}
