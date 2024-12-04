import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {groceryData} from '@utils/json/grocery';
import {Share} from '@assets/images/grocery_assets/svg/share';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import {product} from '@utils/images/images';
import styles from './styles';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {SideArrow} from '@assets/images/common/svg/sideArrow';
import {windowHeight} from '@theme/appConstant';

export default function Header(props) {
  const [selectedImage, setSelectedImage] = useState(product);
  const handleImageSelection = id => {
    const selectedImg = groceryData.find(img => img.id === id);
    setSelectedImage(selectedImg.image);
  };
  const {viewRTLStyle, isRTL, isDark, viewSelfRTLStyle} = useValues();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
        },
      ]}>
      <View
        style={[
          styles.mainView,
          {
            width: isRTL ? '100%' : '86.4%',
            borderBottomLeftRadius: isRTL ? windowHeight(16) : 0,
            borderBottomRightRadius: isRTL ? 0 : windowHeight(16),
            left: isRTL ? windowWidth(30) : null,
          },
        ]}>
        <Image source={selectedImage} style={styles.image} />
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <TouchableOpacity
            onPress={props.navigation}
            style={[
              styles.boxView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            {isRTL ? (
              <SideArrow color={appColors.black} />
            ) : (
              <BackArrow height={'20'} />
            )}
          </TouchableOpacity>
          <View
            style={[
              styles.boxView,
              {
                marginLeft: windowWidth(20),
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
                borderColor: isDark ? '#242424' : null,
                borderWidth: isDark ? 1.4 : null,
              },
            ]}>
            <Share />
          </View>
        </View>
        <FlatList
          data={groceryData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={[styles.mainRow, {justifyContent: viewSelfRTLStyle}]}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleImageSelection(item.id)}
                style={[
                  styles.imageContainer,
                  {
                    backgroundColor: isDark
                      ? appColors.blackColor
                      : appColors.white,
                    borderColor: isDark ? '#242424' : null,
                    borderWidth: isDark ? 1 : 0,
                    left: isRTL ? windowWidth(13) : 0,
                  },
                ]}>
                <Image source={item.image} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
