import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {shopAppBar} from '@utils/images/images';
import styles from './styles';
import {Back} from '@assets/images/main_theme_images/svg/back';
import {MenuScale} from '@assets/images/food_ordering_theme/svg/menuScale';
import {useNavigation} from '@react-navigation/native';
import {ShareIcon} from '@assets/images/common/svg/shareIcon';
import {HeartIcon} from '@assets/images/common/svg/heart';
import {Search} from '@assets/images/grocery_assets/svg/search';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';
import appColors from '@theme/appColors';

export default function HeaderBar(props) {
  const navigation = useNavigation();
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View>
      {!props.notShowheaderBg && (
        <Image
          resizeMode="stretch"
          source={shopAppBar}
          style={styles.imageStyle}
        />
      )}
      <View
        style={[
          styles.textView,
          props.textView,
          {flexDirection: viewRTLStyle},
        ]}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            {isRTL ? (
              <ArrowRight
                color={props.color ? props.color : appColors.foodSecondary}
              />
            ) : (
              <Back color={props.backColor ? props.backColor : 'white'} />
            )}
          </TouchableOpacity>
          <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
        </View>
        {props.Menuicon && (
          <View>
            <MenuScale />
          </View>
        )}

        {props.showRightIcons && (
          <>
            <TouchableOpacity activeOpacity={0.7}>
              <Search color={props.color ? props.color : 'white'} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <ShareIcon
                strokeWidth={'1.4'}
                color={props.color ? props.color : 'white'}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <HeartIcon color={props.color ? props.color : 'white'} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
