import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import {Alert} from '@assets/images/ecommerce_theme/svg/alert';
import Toast from 'react-native-toast-message';
import {useValues} from '@App';
import styles from './styles';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import appColors from '@theme/appColors';

export default function ToastView({navigation}) {
  const [showAlert, setAlert] = useState('');
  const {isDark, viewRTLStyle} = useValues();
  const handleAlertMsg = item => {
    setAlert(item);
    Toast.show({
      type: 'tomatoToast',
    });
  };
  const sucessConfig = {
    tomatoToast: ({text1, props}) => (
      <View
        style={[
          styles.toastView,
          {flexDirection: viewRTLStyle, backgroundColor: '#4BB543'},
        ]}>
        <Check color={'#0C4128'} height={'24'} />
        <Text style={[styles.alertText, {color: '#0C4128'}]}>
          {t('mainTheme.itemAddedSucessfully')}
        </Text>
      </View>
    ),
  };
  const errorConfig = {
    tomatoToast: ({text1, props}) => (
      <View
        style={[
          styles.toastView,
          {flexDirection: viewRTLStyle, backgroundColor: '#F5C2C7'},
        ]}>
        <Alert />
        <Text style={styles.alertText}>{t('ecommerce.alertMessage')}</Text>
      </View>
    ),
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.toast')}
        subContent={t('mainTheme.toastContent')}
        content={
          <>
            <Toast
              config={showAlert === 'sucess' ? sucessConfig : errorConfig}
            />
            <View style={styles.contentView}>
              <TouchableOpacity
                onPress={() => handleAlertMsg('sucess')}
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
                  {t('mainTheme.sucessAlert')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.verticalLine,
                  },
                ]}
                onPress={() => handleAlertMsg('error')}>
                <Text
                  style={[
                    styles.title,
                    {color: isDark ? appColors.white : appColors.fontColor},
                  ]}>
                  {t('mainTheme.errorAlert')}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </View>
  );
}
