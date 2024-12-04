import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {languages} from '../../utils/json/mainTheme';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '../../theme/appColors';
import {setValue} from '../../utils/localStorage';
import {useTranslation} from 'react-i18next';

export default function langugeConvertor(props) {
  const [activeRadio, setActiveRdio] = useState('en');
  const {isDark, setIsRTL} = useValues();
  const {i18n} = useTranslation();

  const changeLanguage = key => {
    setActiveRdio(key);
    if (key == 'ar') {
      setIsRTL(true);
      setValue('rtl', true.toString());
    } else {
      setIsRTL(false);
      setValue('rtl', false.toString());
    }

    props.setModalVisible(!props.modalVisible);
    i18n.changeLanguage(key);
    setValue('language', key);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.background}>
        <View>
          <View
            style={[
              styles.wrap,
              {
                backgroundColor: isDark
                  ? appColors.darkPrimary2
                  : appColors.white,
              },
            ]}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={languages}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => changeLanguage(item.key, 'Drawer')}
                  style={styles.row}>
                  <View
                    style={[
                      styles.radioBtn,
                      {
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.verticalLine,
                      },
                    ]}>
                    {activeRadio == item.key && (
                      <View style={styles.innerCircle}></View>
                    )}
                  </View>
                  <Text
                    style={[
                      styles.name,
                      {color: isDark ? appColors.white : appColors.fontColor},
                    ]}>
                    {t(item.languge)}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
