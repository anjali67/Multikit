import React from 'react';
import {View} from 'react-native';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import GridList from '@commonComponents/gridList';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function Icons({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        imageStyle={mainStyle.imageStyle}
        navigation={navigation}
        title={t('mainTheme.icons')}
        subContent={t('mainTheme.iconsContent')}
        content={
          <View style={mainStyle.margin}>
            <GridList />
          </View>
        }
      />
    </View>
  );
}
