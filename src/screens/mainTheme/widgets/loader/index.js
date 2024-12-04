import React from 'react';
import {View} from 'react-native';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import GridList from '@commonComponents/gridList';
import {loaderArr} from '@utils/json/mainTheme';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function loader({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.loader')}
        subContent={t('mainTheme.loaderContent')}
        content={
          <View style={mainStyle.margin}>
            <GridList
              numColumns={2}
              data={loaderArr}
              mainStyle={{height: windowHeight(100), width: windowWidth(205)}}
            />
          </View>
        }
      />
    </View>
  );
}
