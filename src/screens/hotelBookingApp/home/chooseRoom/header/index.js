import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import {Edit} from '@assets/images/ecommerce_theme/svg/edit';
import {useValues} from '@App';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {useNavigation} from '@react-navigation/native';

export default function header(props) {
  const {viewRTLStyle, textRTLStyle, isRTL} = useValues();
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          {isRTL ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <SideArrow height={'55'} width={'24'} color={appColors.white} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <BackArrow height={'56'} color={appColors.white} width={'10'} />
            </TouchableOpacity>
          )}
          <View style={styles.margin}>
            {props.title && (
              <Text style={[styles.title, {textAlign: textRTLStyle}]}>
                {t(props.title)}
              </Text>
            )}
            <View
              style={[
                styles.row,
                props.rowStyle,
                {flexDirection: viewRTLStyle},
              ]}>
              <Text
                style={[
                  styles.textStyle,
                  {marginRight: windowWidth(5)},
                  props.textStyle,
                ]}>
                {t(props.content)}
              </Text>
              <View style={styles.circle}></View>
              <Text style={[styles.textStyle, props.textStyle]}>
                {t(props.content1)}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.row,
              styles.top,
              props.rowStyle,
              {flexDirection: viewRTLStyle},
            ]}>
            <View style={styles.editIcon}>
              <Edit width={'18'} height={'16'} />
            </View>
            <Text style={[styles.textStyle, styles.fontSize]}>
              {t(props.modify)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
