import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import styles from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import {categoryBg} from '@utils/images/images';

export default function Categories(props) {
  const {isDark, isRTL} = useValues();
  const [selectedCategory, setCategory] = useState(
    props.intializeSelectdCategory && props.intializeSelectdCategory,
  );
  const onSelectCategory = id => {
    setCategory(id);
  };
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FlatList
          numColumns={4}
          data={props.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.marginTop}
                activeOpacity={0.9}
                onPress={() => onSelectCategory(index)}>
                <LinearGradient
                  colors={[
                    selectedCategory == index
                      ? appColors.learningGradiant
                      : isDark
                      ? appColors.darkPrimary
                      : appColors.white,
                    selectedCategory == index
                      ? appColors.learningGradiant1
                      : isDark
                      ? appColors.darkPrimary
                      : appColors.white,
                  ]}
                  style={
                    selectedCategory == index ? styles.mainContainer : null
                  }>
                  <ImageBackground
                    source={selectedCategory == index ? categoryBg : null}
                    style={
                      selectedCategory == index
                        ? styles.categoryImg
                        : styles.background
                    }>
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            selectedCategory == index
                              ? appColors.white
                              : appColors.learningBtn,
                        },
                      ]}>
                      {t(item.title)}
                    </Text>
                  </ImageBackground>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
