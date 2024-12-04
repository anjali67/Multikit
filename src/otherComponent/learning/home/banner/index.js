import React from 'react';
import {View, Text, Image} from 'react-native';
import Background from '../background';
import {girl} from '@utils/images/images';
import {t} from 'i18next';
import bannerStyle from './styles';
import {useValues} from '@App';

export default function banner() {
  const {viewRTLStyle} = useValues();

  return (
    <View style={{marginTop: 40}}>
      <Background
        image={bannerStyle.image}
        content={
          <View style={bannerStyle.padding}>
            <View style={[bannerStyle.row, {flexDirection: viewRTLStyle}]}>
              <Image source={girl} style={bannerStyle.imageStyle} />
              <View style={bannerStyle.margin}>
                <Text style={bannerStyle.title}>
                  {t('learning.kickCareer')}
                </Text>
                <View style={bannerStyle.container}>
                  <Text style={bannerStyle.content}>
                    {t('learning.tryForFree')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
}
