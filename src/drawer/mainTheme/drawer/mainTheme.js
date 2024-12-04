import React, {useState} from 'react';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import {drawerLogo} from '@utils/images/images';
import styles from './styles';
import {drawerContent} from '@utils/json/mainTheme';
import {t} from 'i18next';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import appColors from '@theme/appColors';
import CommonModal from '@commonComponents/commonModal';
import CurrencyConverter from '@commonComponents/currencyConverterModal';
import PopupModal from '@commonComponents/popupModal';
import LangugeConvertor from '@commonComponents/langugeConvertorModal';
import {useValues} from '../../../../App';
import {setValue} from '@utils/localStorage';

export default function mainThemeDrawer({navigation}) {
  const [themeText, setThemeText] = useState('mainTheme.lightMode');
  const {isDark, setIsDark, setIsRTL, isRTL} = useValues();
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const visibleCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDarkMode = () => {
    setThemeText(
      themeText == 'mainTheme.lightMode'
        ? 'mainTheme.darkMode'
        : 'mainTheme.lightMode',
    );
    setIsDark(!isDark);
    var mode = !isDark;
    setValue('darkMode', mode.toString());
  };

  const toggleRtl = () => {
    setIsRTL(!isRTL);
    var rtl = !isRTL;
    setValue('rtl', rtl.toString());
  };

  const handleOtherSetting = key => {
    if (key === 0) {
      toggleDarkMode();
    }
    if (key == 1) {
      toggleModal();
    }
    if (key == 2) {
      toggleRtl();
    }
    if (key === 3) {
      visibleCurrencyModal();
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? appColors.blackColor
            : modalVisible
            ? appColors.modal
            : appColors.white,
        },
      ]}>
      <View style={styles.center}>
        <Image source={drawerLogo} style={styles.imageStyle} />
      </View>
      <FlatList
        data={drawerContent}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              handleOtherSetting(index);
            }}
            style={styles.row}>
            <View style={styles.rowContainer}>
              <Image
                tintColor={isDark ? appColors.white : null}
                source={item.icon}
                style={styles.image}
              />
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.white : appColors.fontColor},
                ]}>
                {index == 0 ? t(themeText) : t(item.name)}
              </Text>
            </View>
            <RightArrow
              color={isDark ? appColors.white : appColors.blackColor}
              height={'30'}
            />
          </TouchableOpacity>
        )}
      />
      <CommonModal
        modal={
          <CurrencyConverter visibleCurrencyModal={visibleCurrencyModal} />
        }
        showModal={showCurrencyModal}
        visibleModal={visibleCurrencyModal}
      />
      <PopupModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        content={
          <LangugeConvertor
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            navigation={navigation}
            toggleModal={toggleModal}
          />
        }
      />
    </View>
  );
}
