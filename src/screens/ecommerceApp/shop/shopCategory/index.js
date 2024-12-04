import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {t} from 'i18next';

export default function ShopCategory(props) {
  const {isDark, isRTL} = useValues();
  return (
    <View style={styles.mainView}>
      <FlatList
        numColumns={3}
        data={props.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.mainContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  props.navigation.navigate('ProductDetails');
                }}
                style={styles.container}>
                <Image source={item.image} style={styles.image} />
                <Text
                  style={[
                    styles.title,
                    {
                      color: isDark ? appColors.white : appColors.black,
                    },
                  ]}>
                  {t(item.productName)}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
