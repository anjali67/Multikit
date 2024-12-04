import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import fitnessStyle from '../../style';
import TextContentView from '@otherComponent/fitness/stepperSlider/textContent';
import {t} from 'i18next';
import {gender} from '@utils/json/fitness';
import DropDown from '@otherComponent/fitness/dropdown';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function personalDetails() {
  const [radioBtn, setRadioBtn] = useState();
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();

  const onRadioBtn = id => {
    setRadioBtn(id);
  };
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <TextContentView
        containerStyle={styles.containerStyle}
        title={'fitness.personalDetailTitle'}
      />
      <View style={styles.margin}>
        {gender.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onRadioBtn(index)}
            style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View
              style={[
                styles.radio,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.verticalLine,
                },
              ]}>
              {radioBtn == index && <View style={styles.innerRadio}></View>}
            </View>
            <Text
              style={[
                styles.name,
                {
                  color: isDark ? appColors.white : appColors.fontColor,
                },
              ]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        ))}
        <Text
          style={[
            styles.title,
            {
              color: isDark ? appColors.white : appColors.fontColor,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('fitness.personalDetailQue')}
        </Text>
        <DropDown title={'fitness.age'} />
        <Text
          style={[
            styles.title,
            {
              color: isDark ? appColors.white : appColors.fontColor,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('fitness.personalDetailQue1')}
        </Text>
        <DropDown title={'fitness.height'} />
        <Text
          style={[
            styles.title,
            {
              color: isDark ? appColors.white : appColors.fontColor,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('fitness.personalDetailQue2')}
        </Text>
        <DropDown title={'fitness.weight'} />
      </View>
    </View>
  );
}
