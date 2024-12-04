import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {loader} from '@utils/images/images';
import appColors from '@theme/appColors';
import {GlobalStyle} from '../../../style';
import GradientView from '@otherComponent/financial/gradientView';
export default function FinancialSplash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('FinancialOnBoarding');
    }, 2000);
  }, []);

  return (
    <View style={GlobalStyle.mainView}>
      <GradientView
        containerStyle={{alignItems: 'center', justifyContent: 'center'}}
        content={
          <View>
            <Image
              tintColor={appColors.gradient1}
              source={loader}
              style={GlobalStyle.loaderImage}
            />
          </View>
        }
      />
    </View>
  );
}
