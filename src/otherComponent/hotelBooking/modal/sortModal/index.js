import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '@style';
import styles from './styles';
import {t} from 'i18next';
import {sortData} from '@utils/json/hotelBooking';
import appColors from '@theme/appColors';
import LinearGradient from 'react-native-linear-gradient';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import {windowHeight} from '@theme/appConstant';
import GradiantbtnView from '../../button';
import {useValues} from '@App';

export default function sortModal(props) {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  const [selected, setSelected] = useState();
  const onSelectItem = item => {
    setSelected(item);
  };
  return (
    <View
      style={[
        GlobalStyle.modal,
        {
          padding: windowHeight(0),
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
        },
      ]}>
      <View>
        <View
          style={[
            styles.sortView,
            {
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.reviewsBg,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.reviewText,
              },
            ]}>
            {t('hotelBooking.sortBy')}
          </Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={sortData}
            renderItem={({index, item}) => {
              return (
                <TouchableOpacity activeOpacity={0.9}>
                  <LinearGradient
                    colors={[
                      selected === index
                        ? appColors.onBoardGradiant
                        : '#EEEEEE',
                      selected === index
                        ? appColors.onBoardGradiant1
                        : '#EEEEEE',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={[styles.linearGradient]}>
                    <TouchableOpacity
                      onPress={() => {
                        onSelectItem(index);
                      }}
                      activeOpacity={0.9}
                      style={[
                        styles.innerContainer,
                        {
                          backgroundColor: isDark
                            ? appColors.blackColor
                            : appColors.white,
                        },
                      ]}>
                      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                        <View
                          style={[
                            styles.rowView,
                            {flexDirection: viewRTLStyle},
                          ]}>
                          <View style={styles.iconView}>{item.icon}</View>
                          <Text style={styles.name}>{t(item.name)}</Text>
                        </View>
                        {selected === index && (
                          <LinearGradient
                            colors={[
                              appColors.onBoardGradiant,
                              appColors.onBoardGradiant1,
                            ]}
                            style={styles.checkIcon}
                            start={{x: 1, y: 0.2}}
                            end={{x: 1, y: 1}}>
                            <View>
                              <Check height={'15'} width={'15'} />
                            </View>
                          </LinearGradient>
                        )}
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={[GlobalStyle.center, styles.btnView]}>
          <GradiantbtnView
            btnStyle={styles.btn}
            gradiant={appColors.onBoardGradiant1}
            onBtnPress={props.sortModalVisible}
            btnTitle={t('common.Apply')}
          />
        </View>
      </View>
    </View>
  );
}
