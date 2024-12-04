import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {AlignLeft, BellNotification, Back} from '@utils/icons';
import {mainlogo} from '@utils/images/images';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '@App';
import {t} from 'i18next';

export default function HeaderComponent({
  title,
  backIcon,
  navigation,
  subContent,
}) {
  const gotoScreen = useNavigation();
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View>
      <View style={styles.innerContainer}>
        <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            {backIcon ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => gotoScreen.openDrawer()}>
                <AlignLeft />
              </TouchableOpacity>
            )}

            <Image source={mainlogo} style={styles.logo} />
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.7}>
              <BellNotification height={'22'} width={'22'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.blankView}>
        <Text style={[styles.title, {textAlign: textRTLStyle}]}>{title}</Text>
        {subContent ? (
          <Text style={[styles.subTitle, {textAlign: textRTLStyle}]}>
            {subContent}
          </Text>
        ) : (
          <Text style={[styles.subTitle, {textAlign: textRTLStyle}]}>
            {t('mainTheme.mainCOntent')}
          </Text>
        )}
      </View>
    </View>
  );
}
