import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {mainBg} from '@utils/images/images';
import styles from './styles';
import HeaderComponent from '../../header/Headercomponent';
export default function widgetsBg({
  navigation,
  title,
  subContent,
  content,
  imageStyle,
  onRefresh,
}) {
  return (
    <ScrollView
      refreshControl={onRefresh}
      contentContainerStyle={{paddingBottom: imageStyle ? 520 : null}}
      showsVerticalScrollIndicator={false}
      style={{height: '100%', width: '100%'}}>
      <View>
        <Image
          source={mainBg}
          style={imageStyle ? imageStyle : styles.imageStyle}
        />
        <View style={styles.innerContainer}>
          <View style={styles.mainContainer}>
            <HeaderComponent
              title={title}
              backIcon={true}
              navigation={navigation}
              subContent={subContent}
            />
          </View>
          {content}
        </View>
      </View>
    </ScrollView>
  );
}
