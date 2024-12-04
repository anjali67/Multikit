import {View, StyleSheet} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import DetailsView from '../../../ecommerceApp/product/productDetail/discriptionView/';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function Accordion({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.accordion')}
        subContent={t('mainTheme.subContent')}
        content={<DetailsView />}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
