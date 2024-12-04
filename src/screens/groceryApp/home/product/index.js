import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from './header';
import NameView from './nameView';
import DropdownView from '@commonComponents/dropdownView';
import CommonModal from '@commonComponents/commonModal';
import {QuanitityModal} from '@otherComponent/grocery/quanitityModal';
import {DeliveryTimeModal} from '@otherComponent/grocery/deliveryTimeModal';
import DetailsView from './detailsView';
import {lowestPrices} from '@utils/json/grocery';
import HorizontalView from '../../component/horizontalView';
import {t} from 'i18next';
import ViewCart from '@commonComponents/viewCart';
import BottomContainer from './bottomContainer';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function GroceryProduct({navigation}) {
  const [quantityModal, setQuantityModal] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [selectQty, setSelectQty] = useState(0);
  const [quantityTitle, setQuantityTitle] = useState();
  const [diliveryTitle, setDeliveryTitle] = useState();
  const [selectDeli, setSelectDeli] = useState(0);
  const [value, setValue] = useState();
  const {isDark, textRTLStyle,currSymbol,currValue} = useValues();
  const [deliverTime, setTime] = useState();

  
  const visibleDeliveryModal = () => {
    setDeliveryModal(!deliveryModal);
  };
  const visibleQuantityModal = () => {
    setQuantityModal(!quantityModal);
  };

  const selectQuantity = key => {
    setSelectQty(key);
  };

  const onApplyBtn = () => {
    setQuantityTitle(value);
    setQuantityModal(!quantityModal);
  };

  const selectDelivery = (item, key) => {
    setTime(item);
    setSelectDeli(key);
  };

  const onApplyDeliverTime = () => {
    setDeliveryTitle(deliverTime);
    setDeliveryModal(!deliveryModal);
  };


  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Header
          navigation={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.horizontalView}>
          <NameView />
        </View>
        <DropdownView
          leftTitle={
            quantityTitle
              ? t(quantityTitle.gram) +   ' ' + '/'   +  ' '   +   currSymbol + (currValue * quantityTitle.price).toFixed(2)
              : '500 g /  $24.00'
          }
          rightTitle={
            diliveryTitle
              ? t(diliveryTitle.delivery)
              : 'productDetailsPage.deliveryTime'
          }
          visibleDeliveryModal={visibleDeliveryModal}
          visibleQuantityModal={visibleQuantityModal}
        />
        <DetailsView />
        <Text
          style={[
            styles.textStyle,
            {
              color: isDark ? appColors.white : appColors.black,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('common.SimilarProducts')}
        </Text>
        <HorizontalView
          onPress={() => {
            navigation.navigate('GroceryProduct');
          }}
          data={lowestPrices}
        />
      </ScrollView>
      <ViewCart
        content={
          <View>
            <BottomContainer navigation={navigation} />
          </View>
        }
      />
      <CommonModal
        modal={
          <QuanitityModal
            selectQuantity={selectQuantity}
            selectQty={selectQty}
            onCancel={() => setQuantityModal(!quantityModal)}
            onApplyBtn={onApplyBtn}
            setValue={setValue}
          />
        }
        showModal={quantityModal}
        visibleModal={visibleQuantityModal}
      />
      <CommonModal
        modal={
          <DeliveryTimeModal
            onPress={visibleDeliveryModal}
            selectDelivery={selectDelivery}
            selectDeli={selectDeli}
            onApplyDeliverTime={onApplyDeliverTime}
          />
        }
        showModal={deliveryModal}
        visibleModal={visibleDeliveryModal}
      />
    </SafeAreaView>
  );
}
