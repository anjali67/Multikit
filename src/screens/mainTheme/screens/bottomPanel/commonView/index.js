import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { bottomtabImg } from '@utils/images/images'
import {useValues} from '@App';
import appColors from '@theme/appColors';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import { t } from 'i18next';
import appFonts from '@theme/appFonts';
import HomeHeader from '@commonComponents/homeHeader';
import { useNavigation } from '@react-navigation/native';
import {homelogo} from '@utils/images/images';
import {HotelBellNotification} from '@assets/images/hotel_theme/svg/bellnotification';

export default function commonView() {
    const {textRTLStyle, isDark} = useValues();
    const navigation = useNavigation()
  return (
    <View style={[styles.container,{backgroundColor: isDark ? appColors.blackColor : appColors.white}]}>
       <HomeHeader
        logoIcon={homelogo}
        notificationIcon={<HotelBellNotification />}
        logoImgeStyle={{width: windowWidth(102)}}
        navigation={navigation}
        notShowingDrawer
       
      />
        <View style={styles.center}>
        <Image source={bottomtabImg} style={styles.image} />
        <Text  style={[styles.text,{color: isDark ? appColors.white : appColors.fontColor}]}>{t('mainTheme.bottomPanelText')}</Text>
 
  </View>
    </View>
  
  )
}

const styles = StyleSheet.create({
    image:{
        height:windowHeight(100),
        width:windowWidth(100),
        resizeMode:"contain"
    },
    center:{
     height:"80%",
     width:"100%",
     alignItems:"center",
     justifyContent:"center",
     
    },
    text:{
        color:appColors.fontColor,
        fontFamily:appFonts.MontserratMedium,
        fontSize:fontSizes.FONT21
    },
    container:{
        height:"100%",
        width:"100%",
    }
})