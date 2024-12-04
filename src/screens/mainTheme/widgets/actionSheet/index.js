import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import SortModal from '@otherComponent/hotelBooking/modal/sortModal';
import CommonModal from '@commonComponents/commonModal';
import {useValues} from '@App';

export default function actionSheet({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const sortModalVisible = () => {
    setShowModal(!showModal);
  };
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.actionSheet')}
        subContent={t('mainTheme.actionSheetContent')}
        content={
          <View>
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              activeOpacity={0.9}
              style={[
                styles.btnView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.verticalLine,
                },
              ]}>
              <Text
                style={[
                  styles.title,
                  {color: isDark ? appColors.white : appColors.fontColor},
                ]}>
                {t('mainTheme.openActionSheet')}
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
      <CommonModal
        modal={<SortModal  sortModalVisible={sortModalVisible}/>}
        showModal={showModal}
        visibleModal={sortModalVisible}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  btnView: {
    margin: windowHeight(20),
    backgroundColor: appColors.verticalLine,
    paddingVertical: windowHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
});
