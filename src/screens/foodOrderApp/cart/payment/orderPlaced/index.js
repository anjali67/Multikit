import {
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import foodOrderStyle from '../../../style/styles';
import appColors from '@theme/appColors';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {useValues} from '@App';
import BottomContainer from './bottomContainer';
import AddressView from './addressView';
import {SideArrow} from '@assets/images/common/svg/sideArrow';

export default function OrderPlaced({navigation}) {
  const [loading, setLoading] = useState(true);

  const {viewRTLStyle, isRTL, isDark} = useValues();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('FoodTab');
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={[foodOrderStyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary }]}>
      <View>
        {loading ? (
          <View style={styles.loaderView}>
            <ActivityIndicator size="large" color={appColors.groceryBtn} />
          </View>
        ) : (
          <View>
            <MapView
              style={styles.mapView}
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
            <View style={[styles.mainView,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
              <AddressView />
            </View>
            <BottomContainer />
          </View>
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
