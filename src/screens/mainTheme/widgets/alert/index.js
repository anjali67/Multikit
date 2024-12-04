import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import PopupModal from '@commonComponents/popupModal';
import WishlistModal from '@otherComponent/hotelBooking/modal/whishlistModal';
import {useValues} from '@App';

export default function alert({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
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
        title={t('foodResturants.alert')}
        subContent={t('mainTheme.alertContent')}
        content={
          <View>
            <TouchableOpacity
              onPress={toggleModal}
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
                {t('mainTheme.openAlert')}
              </Text>
            </TouchableOpacity>

            <PopupModal
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              content={
                <WishlistModal
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
              }
            />
          </View>
        }
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
