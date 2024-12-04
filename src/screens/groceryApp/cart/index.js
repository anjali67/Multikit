import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../component/header';
import CartView from './cartData';
import {cartData} from '@utils/json/grocery';
import {divider} from '@utils/images/images';
import Total from '@commonComponents/total';
import Button from '@commonComponents/button/button';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function GroceryCart({navigation, route}) {
  const {isDark, currSymbol, currValue} = useValues();
  return (
    <View>
      <ScrollView
        contentContainerStyle={[
          styles.scrollView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.container,
            {backgroundColor: isDark ? appColors.blackColor : appColors.white},
          ]}>
          <Header navigation={navigation} />
          <CartView data={cartData} imageStyle={styles.imageStyle} />
          <Image source={divider} style={styles.img} />
          <Total
            title={'common.Order Details'}
            bagPrice={(currValue * 220).toFixed(2)}
            savingsPrice={-(currValue * 20).toFixed(2)}
            delivery={(currValue * 50).toFixed(2)}
            total={(currValue * 270).toFixed(2)}
          />
          <View style={styles.blank}></View>
          <Button
            text={t('common.Proceed to Checkout')}
            style={styles.btnStyle}
            btnTextStyle={styles.btn}
            onPress={() => {
              navigation.navigate('GroceryAddress');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
