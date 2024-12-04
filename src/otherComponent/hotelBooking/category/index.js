import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {hotelStyle} from '@screens/hotelBookingApp/styles';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import Header from '@screens/hotelBookingApp/home/chooseRoom/header';
import TextContentDivision from '@screens/hotelBookingApp/home/singleDetail/textContainer/textContentDivision';
import {Swap} from '@assets/images/hotel_theme/svg/swap';
import {Filter} from '@assets/images/hotel_theme/svg/filter';
import {Map} from '@assets/images/hotel_theme/svg/map';
import appColors from '@theme/appColors';
import CategoryRow from './categoryRow';
import {hotelCategory} from '@utils/json/hotelBooking';
import {t} from 'i18next';
import CommonModal from '@commonComponents/commonModal';
import SortModal from '../modal/sortModal';
import {useValues} from '@App';

export default function categorySection({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const {viewRTLStyle, textRTLStyle, isRTL, isDark} = useValues();
  const sortModalVisible = () => {
    setShowModal(!showModal);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}
      contentContainerStyle={styles.contentContainerStyle}>
      <View>
        <HeaderView
          grandiantColor={appColors.onBoardGradiant1}
          content={
            <View>
              <Header
                rowStyle={styles.row}
                content={'hotelBooking.country'}
                content1={'hotelBooking.date'}
                textStyle={styles.textStyle}
                modify={'foodCart.edit'}
              />
            </View>
          }
        />
        <TextContentDivision
          mainViewStyle={[styles.mainViewStyle]}
          swap={<Swap />}
          content={'hotelBooking.Sort'}
          filter={<Filter />}
          content1={'hotelBooking.filter'}
          map={<Map />}
          content2={'hotelBooking.map'}
          textColor={appColors.reviewText}
          vertical={styles.vertical}
          textStyle={[
            styles.text,
            {color: isDark ? appColors.white : appColors.reviewText},
          ]}
          rowStyle={styles.rowStyle}
          onSortClick={() => setShowModal(!showModal)}
          onFilterClick={() => {
            navigation.navigate('FilterModal');
          }}
          onMapClick={() => {
            navigation.navigate('Map');
          }}
        />
        <Text style={[styles.title, styles.margin, {textAlign: textRTLStyle}]}>
          {hotelCategory.length} {t('hotelBooking.resultFound')}
        </Text>
        <CategoryRow data={hotelCategory} />
        <CommonModal
          modal={<SortModal />}
          showModal={showModal}
          visibleModal={sortModalVisible}
        />
      </View>
    </ScrollView>
  );
}
