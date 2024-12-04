import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {useValues} from '@App';
import {Drawer} from '@assets/images/grocery_assets/svg/drawer';
import SearchComponent from '../../../blogApp/search/serachBar';
import appColors from '@theme/appColors';
import { useNavigation } from '@react-navigation/native';

export default function searchInput(props) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: isDark ? appColors.blackColor : appColors.white,
      }}>
      <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity activeOpacity={0.9}
          onPress={() => {
           navigation.openDrawer();
          }}
          style={[styles.drawerView, {marginTop: 10}]}>
          <Drawer />
        </TouchableOpacity>
        <SearchComponent
          inputView={[
            styles.inputView,
            {
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.grayLight,
            },
          ]}
        />
      </View>
    </View>
  );
}
