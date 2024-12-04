import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import RowContainer from './rowContainer';
import {radioButtons, checkBoxes} from '@utils/json/mainTheme';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function checkBoxRadio({navigation}) {
  const [selectdBtn, setSelectedBtn] = useState(0);
  const [selectdCheckBox, setSelectdCheckBox] = useState(0);
  const onRadioClick = id => {
    setSelectedBtn(id);
  };

  const onCheckboxClick = id => {
    setSelectdCheckBox(id);
  };
  const {viewRTLStyle, isDark} = useValues();

  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.checksRadio')}
        subContent={t('mainTheme.checksRadioContent')}
        content={
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={mainStyle.margin}>
              <RowContainer
                data={radioButtons}
                onRadioClick={onRadioClick}
                selectdBtn={selectdBtn}
              />
              <RowContainer
                checkBox
                data={checkBoxes}
                onRadioClick={onCheckboxClick}
                selectdBtn={selectdCheckBox}
              />
            </View>
          </ScrollView>
        }
      />
    </View>
  );
}
