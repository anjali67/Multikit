import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../header/Headercomponent';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function BoxContainer({
  content,
  title,
  height,
  backIcon,
  subContent,
  navigation,
  contentContainerStyle
}) {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={[styles.mainView,contentContainerStyle]}>
      <View style={[{height: height ? height : '11%'}, styles.mainContainer]}>
        <HeaderComponent
          title={title}
          backIcon={backIcon}
          navigation={navigation}
          subContent={subContent}
        />
      </View>
      {content}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingBottom: windowHeight(55),
  },
  mainContainer: {
    backgroundColor: appColors.green,
  },
});
