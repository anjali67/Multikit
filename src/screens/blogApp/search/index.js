import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {Drawer} from '@assets/images/grocery_assets/svg/drawer';
import TrendingTags from './tags';
import SearchComponent from './serachBar';
import { useNavigation } from '@react-navigation/native';

export default function blogSearch() {
  const {isDark, viewRTLStyle} = useValues();
  const navigation = useNavigation()
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={[styles.drawerView, {marginTop: 10}]}>
          <Drawer />
        </TouchableOpacity>

        <SearchComponent />
      </View>
      <View style={styles.margin}>
        <TrendingTags />
      </View>
      {/* <BlogTab /> */}
    </View>
  );
}
