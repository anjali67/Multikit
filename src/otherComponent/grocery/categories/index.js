import {Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

const HorizontalItem = ({imageSource, title, props}) => {
  const {t} = useTranslation();
  const {viewRTLStyle,isDark} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        props.navigation.navigate('CategoryShop');
      }}
      style={[styles.container, {flexDirection: viewRTLStyle,backgroundColor:isDark ? appColors.groceryBtn : appColors.category}]}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={[styles.title,{color:isDark ? appColors.white : appColors.black}]}>{t(title)}</Text>
    </TouchableOpacity>
  );
};

export default function Categories(props) {
  const {t} = useTranslation();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scrollView}>
      {props.data.map(item => (
        <HorizontalItem
          key={item.id}
          imageSource={item.image}
          title={item.title}
          props={props}
        />
      ))}
    </ScrollView>
  );
}
