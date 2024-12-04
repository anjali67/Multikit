import React, {useState, useEffect} from 'react';
import {View, Image, Text,ScrollView} from 'react-native';
import nftStyle from '../style';
import HeaderRow from '@otherComponent/nft/headerRow';
import styles from './styles';
import {t} from 'i18next';
import TextView from '../details/TextDetail/textView';
import {detail} from '@utils/images/images';
import BidSection from './bidSection';
import ButtonView from '@otherComponent/nft/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function auction() {
  const [selectCategory, setSelectCategory] = useState(0);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 59));

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(interval);
          } else {
            setHours(prevHours => prevHours - 1);
            setMinutes(59);
          }
        } else {
          setMinutes(prevMinutes => prevMinutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
   
      <View
      style={[
        nftStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.container}>
        <HeaderRow title={t('nft.kurtTheRoadie')} />
        <Image source={detail} style={styles.image} />
     
       <View style={styles.center}>
          <TextView
            selectCategory={selectCategory}
            title={'nft.kurtTheRoadie'}
            content={t('nft.detailContent')}
          />
          <View style={styles.row}>
            <View style={styles.mainView}>
              <Text
                style={[
                  styles.timerView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.bgColor,
                  },
                ]}>
                {hours.toString().padStart(2, '0')}
              </Text>
              <View>
                <Text
                  style={[
                    styles.dotView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.bgColor,
                    },
                  ]}></Text>
                <Text
                  style={[
                    styles.dotView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.bgColor,
                    },
                  ]}></Text>
              </View>
            </View>
            <View style={styles.mainView}>
              <Text
                style={[
                  styles.timerView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.bgColor,
                  },
                ]}>
                {minutes.toString().padStart(2, '0')}
              </Text>
              <View>
                <Text
                  style={[
                    styles.dotView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.bgColor,
                    },
                  ]}></Text>
                <Text
                  style={[
                    styles.dotView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.bgColor,
                    },
                  ]}></Text>
              </View>
            </View>
            <View style={styles.mainView}>
              <Text
                style={[
                  styles.timerView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.bgColor,
                  },
                ]}>
                {seconds.toString().padStart(2, '0')}
              </Text>
            </View>
          </View>
        </View>
        <BidSection />
      </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <ButtonView btnTitle={t('nft.placeBid')} />
      </View>
    </View>
   
  );
}
