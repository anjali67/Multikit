import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import {Box} from '@assets/images/grocery_assets/svg/box';
import {t} from 'i18next';
import {useValues} from '@App';

export default OrderDetailsView = props => {
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={[Styles.orderDetailView, {flexDirection: viewRTLStyle}]}>
      <Box />
      <View style={Styles.idView}>
        <Text style={Styles.id}>
          {t('orderSucess.orderID')} : {t('orderSucess.id')}{' '}
        </Text>
        <Text style={Styles.orderDeliver}>
          {t('orderDetailPage.orderDelivered')}{' '}
        </Text>
      </View>
    </View>
  );
};
