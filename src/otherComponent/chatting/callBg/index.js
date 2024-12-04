import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Back} from '@assets/images/chat_theme/svg/Back';
import {UserPlus} from '@assets/images/chat_theme/svg/userPlus';
import {Mic} from '@assets/images/chat_theme/svg/mic';
import {Phone} from '@assets/images/chat_theme/svg/phone';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/hotel_theme/svg/rightArrow';

export default function callBg(props) {
  const {viewRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.mainContainer, props.mainView]}>
      <View>
        <Image
          source={props.bgImag}
          style={[styles.mainContainer, props.mainContainer]}
        />
        <View style={styles.mainView}>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.goBack()}>
              {isRTL ? (
                <RightArrow height={'52'} width={'26'} />
              ) : (
                <Back strokeWidth={'1.6'} />
              )}
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.9}
              style={{marginHorizontal: 6}}
              onPress={() => {
                props.navigation.navigate('ChatProfile');
              }}>
              <UserPlus strokeWidth={'1.6'} height={'55'} />
            </TouchableOpacity>
          </View>
          <View style={styles.main}>{props.content}</View>
          <View style={styles.bottomView}>
            <View style={styles.innerContainer}>
              {props.icon}
              {props.icon1}
              <Mic />
              <View style={styles.circle}>
                <Phone />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
