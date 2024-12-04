import React from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import styles from '../../styles';
import Category from './category';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {useNavigation} from '@react-navigation/native';

export default function categoryRow(props) {
  const {viewRTLStyle, isRTL, textRTLStyle, isDark} = useValues();
  const navigation = useNavigation();
  return (
    <View>
      {props.totalResultFound && (
        <View>
          <Text
            style={[
              styles.result,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.fontColor,
              },
            ]}>
            {props.data.length} {t('hotelBooking.resultFound')}
          </Text>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        contentContainerStyle={
          props.contentContainerStyle
            ? props.contentContainerStyle
            : {paddingBottom: 100}
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('SingleBlog');
            }}
            style={[
              styles.row,
              {
                flexDirection: viewRTLStyle,
                justifyContent: 'space-between',
                marginTop: windowHeight(15),
              },
            ]}>
            {props.articalContent ? (
              <>
                <View>
                  <Image source={item.image} style={styles.imageView} />
                </View>
                <View
                  style={[
                    {marginRight: 4, marginLeft: isRTL ? 10 : null},
                    props.leftStyle,
                  ]}>
                  <Category
                    titleStyle={props.titleStyle}
                    contentStyle={props.contentStyle}
                    item={item}
                    iconWidth={props.iconWidth}
                    iconHeight={props.iconHeight}
                  />
                </View>
              </>
            ) : (
              <>
                <View
                  style={{
                    marginRight: isRTL ? null : windowWidth(15),
                  }}>
                  <Category item={item} />
                </View>
                <View>
                  <Image
                    source={item.image}
                    style={[
                      styles.imageView,
                      {marginRight: isRTL ? null : windowWidth(15)},
                    ]}
                  />
                </View>
              </>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
