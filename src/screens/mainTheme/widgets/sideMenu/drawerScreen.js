import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '../../../../../App';
import {DrawerData} from '@utils/json/mainTheme';
import appColors from '@theme/appColors';

export default function sideMenu({navigation}) {
  const {setDrawerValue,isDark} = useValues();
  return (
    <View style={[mainStyle.container,{ backgroundColor: isDark ? appColors.blackColor : appColors.grayLight}]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.sideMenu')}
        subContent={t('mainTheme.loaderContent')}
        content={
          <View style={mainStyle.margin}>
            {DrawerData.map((item, index) => {
              return (
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => {
                    setDrawerValue(index);
                    navigation.toggleDrawer();
                  }}
                  style={[[mainStyle.btnView, {marginTop: windowHeight(4), backgroundColor: isDark ? appColors.darkTheme : appColors.verticalLine,}]]}>
                  <Text style={[mainStyle.title,{color: isDark ?  appColors.white : appColors.fontColor}]}>{t(item.name)}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        }
      />
    </View>
  );
}
