import React from 'react';
import {View, ScrollView} from 'react-native';
import cabStyle from '@screens/cabBookingApp/style';
import styles from './styles';
import HomeHeader from '@screens/cabBookingApp/home/header';
import MapView, {Marker} from 'react-native-maps';
import {useValues} from '@App';
import appColors from '../../../theme/appColors';

export default function homeView(props) {
  const {isDark} = useValues();
  return (
    <View style={cabStyle.mainContainer}>
      <View>
        <MapView
          style={[styles.container, props.container]}
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
        {props.showHomeHeader && (
          <View style={styles.mainContainer}>
            <HomeHeader navigation={props.navigation} />
          </View>
        )}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={props.contentContainerStyle}
        style={[
          cabStyle.bottomSheet,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        {props.content}
      </ScrollView>
    </View>
  );
}
