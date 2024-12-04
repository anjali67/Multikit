import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Location} from '@assets/images/grocery_assets/svg/location';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import AddAddress from './addAddress';
import {useValues} from '@App';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import appColors from '@theme/appColors';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function GroceryAddress({navigation}) {
  const {viewRTLStyle, isRTL, isDark} = useValues();
  const [latitude, setLatitude] = useState();
  const [longitude, setLogitude] = useState();
  const [loading, setLoading] = useState(true);

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
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurruntLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLogitude(position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View>
        {loading ? (
          <View style={styles.loaderView}>
            <ActivityIndicator size="large" color={appColors.groceryBtn} />
          </View>
        ) : (
          <MapView
            style={{height: '40%', width: '100%'}}
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
        )}
        <View style={styles.rowContainer}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View
              style={[
                styles.boxView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.goBack();
                }}>
                {isRTL ? <SideArrow /> : <BackArrow />}
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.boxView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <Location />
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          <AddAddress navigation={navigation} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
