import React, {useEffect, useState} from 'react';
import {View, PermissionsAndroid, ActivityIndicator, Text} from 'react-native';
import {hotelStyle} from '@screens/hotelBookingApp/styles';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import Header from '@screens/hotelBookingApp/home/chooseRoom/header';
import styles from './styles';
import SearchView from '../../headerView/searchView';
import {CrossHair} from '@assets/images/hotel_theme/svg/crossHair';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import RecommendedSection from '../../home/recommendedSection';
import {mapData} from '@utils/json/hotelBooking';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default function Map({navigation}) {
  const [latitude, setLatitude] = useState();
  const [longitude, setLogitude] = useState();
  const [loading, setLoading] = useState(true);
  const {isDark} = useValues();

  useEffect(() => {
    requestPermission();
    getCurruntLocation();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {},
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurruntLocation();
      } else {
        // console.log('Location permission denied');
      }
    } catch (err) {
      // console.warn(err);
    }
  };

  const getCurruntLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLogitude(position.coords.longitude);
      },
      error => {
        // console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={hotelStyle.mainContainer}>
      <HeaderView
        grandiantColor={appColors.onBoardGradiant1}
        containerView={{
          borderBottomLeftRadius: isDark ? 0 : windowHeight(18),
          borderBottomRightRadius: isDark ? 0 : windowHeight(18),
        }}
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
      <SearchView icon={<CrossHair />} />
      <View>
        {loading ? (
          <View style={styles.loaderView}>
            <ActivityIndicator
              size="large"
              color={appColors.onBoardGradiant1}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <MapView
              style={styles.container}
              initialRegion={{
                latitude: 28.6139,
                longitude: 77.209,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              onRegionChange={data => {
                console.log(data);
              }}>
              <Marker
                coordinate={{latitude: 21.1982596, longitude: 72.7960651}}
                pinColor={'red'}></Marker>
            </MapView>
            <View style={styles.mainView}>
              <RecommendedSection
                imageStyle={styles.imageStyle}
                isHorizontal={true}
                data={mapData}
                textContainer={styles.textContainer}
                rowStyle={styles.rowStyle}
                containerView={styles.containerView}
                nameStyle={styles.fontsize}
                navigation={navigation}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
