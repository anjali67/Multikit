import React from 'react';
import { View } from "react-native";
import { Check } from '@assets/images/ecommerce_theme/svg/check';
import {useValues} from '@App';
import styles from './styles';

export function Selected() {
    const {isRTL, isDark} = useValues();
    return (
        <View style={[styles.selectView, isRTL ? styles.selectRight : styles.selectLeft]}>
            <Check/>
        </View>
    )
}