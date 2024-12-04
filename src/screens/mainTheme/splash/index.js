import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {megaThemeLogo} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {getValue, setValue} from '@utils/localStorage';
import {useValues} from '../../../../App';
import {useTranslation} from 'react-i18next';

const SplashScreen = ({navigation}) => {
  const logoScaleAnimation = new Animated.Value(0);
  const {
    setIsRTL,
    setCurrSymbol,
    setIsDark,
    setCurrValue,
    currSymbol,
    currValue,
  } = useValues();
  const {i18n} = useTranslation();

  const getSelectedLanguge = async () => {
    var selectedLanguge = await getValue('language');
    if (selectedLanguge != null) {
      i18n.changeLanguage(selectedLanguge);
    }
  };

  const getDarkModeval = async () => {
    console.log('Call darkmode');
    getValue('darkMode')
      .then(res => JSON.parse(res))
      .then(val => {
        if (val !== null) {
          setIsDark(val);
        }
      });
  };

  const getRtlval = async () => {
    getValue('rtl')
      .then(res => JSON.parse(res))
      .then(val => {
        if (val !== null) {
          setIsRTL(val);
        }
      });
  };

  useEffect(() => {
    getCurruncySymbol(), getCurruncyVal();
  }, []);

  const getCurruncySymbol = async () => {
    const val = await getValue('curruncySymbol');
    if (val != null) {
      setCurrSymbol(val);
    } else {
      setCurrSymbol(currSymbol);
    }
  };

  const getCurruncyVal = async () => {
    const val = await getValue('curruncyValue');
    if (val != null) {
      setCurrValue(val);
    } else {
      setCurrValue(currValue);
    }
  };

  useEffect(() => {
    getDarkModeval();
    getSelectedLanguge();
    getRtlval();
  }, []);

  useEffect(() => {
    Animated.timing(logoScaleAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('MainDrawer');
    }, 2000);
  }, [logoScaleAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {transform: [{scale: logoScaleAnimation}]},
        ]}>
        <Image source={megaThemeLogo} style={styles.logoStyle} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: windowHeight(80),
    width: windowWidth(110),
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
  },
});

export default SplashScreen;
