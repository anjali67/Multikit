import React, {useState} from 'react';
import {View, Text, Animated} from 'react-native';
import styles from './styles';
import Goals from '../../../screens/fitnessApp/steps/goals';
import LosingWeight from '@screens/fitnessApp/steps/losingWeight';
import ActivityLevels from '@screens/fitnessApp/steps/activityLevels';
import PersonalDetails from '@screens/fitnessApp/steps/personalDetails';
import Goal from '@screens/fitnessApp/steps/goal';
import {t} from 'i18next';
import ProgressBar from './progressBar';
import appColors from '@theme/appColors';
import {useValues} from '@App';

const stepCount = 5;
export default function ProgressStepsSlider({navigation}) {
  const [currentStep, setCurrentStep] = useState(1);
  const progress = useState(new Animated.Value(0))[0];
  const {isDark, isRTL} = useValues();

  const handleNextStep = () => {
    if (currentStep < stepCount) {
      setCurrentStep(currentStep + 1);
      Animated.timing(progress, {
        toValue: currentStep / stepCount,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else if (currentStep === stepCount) {
      navigation.navigate('FitnessTab');
    }
  };
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      Animated.timing(progress, {
        toValue: (currentStep - 2) / stepCount,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };
  const renderProgressIndicator = () => {
    const indicators = [];
    for (let i = 1; i <= stepCount; i++) {
      const isCurrentStep = i <= currentStep;
      const indicatorStyle = isCurrentStep
        ? [styles.indicator, styles.currentIndicator]
        : styles.indicator;
      indicators.push(
        <View key={i} style={indicatorStyle}>
          <Text style={styles.indicatorText}>{i}</Text>
        </View>,
      );
    }
    return indicators;
  };
  const handleTitle = () => {
    switch (currentStep) {
      case 1:
        return (
          <Text
            style={[
              styles.textStyle,
              {
                color: isDark ? appColors.white : appColors.fontColor,
              },
            ]}>
            {t('fitness.setUpGoals')}
          </Text>
        );
      case 2:
        return (
          <Text
            style={[
              styles.textStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('fitness.losingWeight')}
          </Text>
        );
      case 3:
        return (
          <Text
            style={[
              styles.textStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('fitness.activityLevel')}
          </Text>
        );
      case 4:
        return (
          <Text
            style={[
              styles.textStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('fitness.personalDetails')}
          </Text>
        );
      case 5:
        return (
          <Text
            style={[
              styles.textStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}>
            {t('fitness.goal')}
          </Text>
        );
      default:
        return null;
    }
  };
  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return <Goals />;
      case 2:
        return <LosingWeight />;
      case 3:
        return <ActivityLevels />;
      case 4:
        return <PersonalDetails />;
      case 5:
        return <Goal />;
      default:
        return null;
    }
  };
  return (
    <ProgressBar
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
      renderProgressIndicator={renderProgressIndicator}
      handleTitle={handleTitle}
      renderScreen={renderScreen}
    />
  );
}
