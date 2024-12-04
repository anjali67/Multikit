import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from './header';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import appColors from '@theme/appColors';
import {hotelStyle} from '../../styles';
import {hotelImg5, hotelImg7} from '@utils/images/images';
import {deluxHotelFacility} from '@utils/json/hotelBooking';
import {deluxRoomData} from '@utils/json/hotelBooking';
import {windowHeight} from '@theme/appConstant';
import MainSection from './mainSection';
import {useValues} from '@App';

export default function ChooseRoom({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: windowHeight(10)}}
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View>
        <HeaderView
          grandiantColor={appColors.onBoardGradiant1}
          content={
            <View>
              <Header
                title={'hotelBooking.selectRoom'}
                content={'hotelBooking.date'}
                content1={'hotelBooking.adults'}
                modify={'hotelBooking.modify'}
              />
            </View>
          }
        />
        <View style={{marginTop: windowHeight(15)}}></View>
        <MainSection
          navigation={navigation}
          roomName={'hotelBooking.roomName'}
          image={hotelImg5}
          data={deluxRoomData}
        />
        <MainSection
          navigation={navigation}
          roomName={'hotelBooking.deluxRoom'}
          image={hotelImg7}
          data={deluxHotelFacility}
        />
      </View>
    </ScrollView>
  );
}
