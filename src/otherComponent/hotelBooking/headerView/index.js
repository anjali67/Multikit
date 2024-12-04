import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {t} from 'i18next';
import {Drawer} from '@assets/images/grocery_assets/svg/drawer';
import SearchView from './searchView';
import {useValues} from '@App';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {useNavigation} from '@react-navigation/native';

export default function headerView(props) {
  const {viewRTLStyle, textRTLStyle, isRTL} = useValues();
  const navigation = useNavigation();

console.log("Navigation is *************************8",navigation)
  return (
    <View>
      <LinearGradient
        colors={[
          appColors.onBoardGradiant,
          props.grandiantColor ? props.grandiantColor : '#7232d9',
        ]}
        style={[styles.containerView, props.containerView]}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        {props.showBackArrow && (
          <View
            style={[
              styles.textView,
              props.textView,
              {flexDirection: viewRTLStyle},
            ]}
            activeOpacity={0.9}>
            {isRTL ? (
              <TouchableOpacity
                style={styles.backIcon}
                onPress={() => navigation.goBack()}>
                <RightArrow />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.backIcon}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <BackArrow height={'20'} width={'10'} color={appColors.white} />
              </TouchableOpacity>
            )}
            <Text style={[styles.title, {textAlign: textRTLStyle}]}>
              {t(props.title)}
            </Text>
          </View>
        )}
        {props.showDrawer && (
          <View>
            <View
              style={[
                styles.textView,
                props.textView,
                {flexDirection: viewRTLStyle},
              ]}
              onPress={() => {}}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => props.navigation.openDrawer()}>
                <Drawer color={appColors.white} />
              </TouchableOpacity>
              <Text style={styles.title}>{t(props.title)}</Text>
            </View>
          </View>
        )}

        {props.content && props.content}
      </LinearGradient>
      {props.ShowserachView ? <SearchView /> : null}
    </View>
  );
}
