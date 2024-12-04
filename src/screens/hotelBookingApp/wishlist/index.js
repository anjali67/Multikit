import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {hotelStyle} from '../styles';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import RecommendedSection from '@otherComponent/hotelBooking/home/recommendedSection';
import {windowHeight} from '@theme/appConstant';
import {wishlistData} from '@utils/json/hotelBooking';
import appColors from '@theme/appColors';
import PopupModal from '@commonComponents/popupModal';
import WishlistModal from '@otherComponent/hotelBooking/modal/whishlistModal';
import {useValues} from '@App';

export default function hotelBookingWishlist({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const {isDark} = useValues();

  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View>
        <HeaderView
          grandiantColor={appColors.onBoardGradiant1}
          showBackArrow={true}
          ShowserachView={true}
          title={'ecommerce.whishlist'}
          navigation={navigation}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={hotelStyle.scrollView}>
          <View style={{height: windowHeight(10)}}></View>
          <RecommendedSection
            navigation={navigation}
            showCrossIcon
            data={wishlistData}
            toggleModal={toggleModal}
          />
        </ScrollView>
      </View>
      <PopupModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        content={
          <WishlistModal
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        }
      />
    </View>
  );
}
