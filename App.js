import {LogBox} from 'react-native';
import React, {createContext, useState, useContext} from 'react';
import MyStack from './src/navigator';
import {
  textRTLStyle,
  viewRTLStyle,
  imageRTLStyle,
  viewSelfRTLStyle,
} from './src/style/rtlStyle';

LogBox.ignoreAllLogs();
export const CommonContext = createContext();

export default function App() {
  const [isRTL, setIsRTL] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currSymbol, setCurrSymbol] = useState('$');
  const [currValue, setCurrValue] = useState(1);
  const [drawerValue, setDrawerValue] = useState(0);
  const [themeText, setThemeText] = useState('mainTheme.lightMode');
  const contextValues = {
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    textRTLStyle: textRTLStyle(isRTL),
    viewRTLStyle: viewRTLStyle(isRTL),
    imageRTLStyle: imageRTLStyle(isRTL),
    viewSelfRTLStyle: viewSelfRTLStyle(isRTL),
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    drawerValue,
    setDrawerValue,
    themeText,
    setThemeText,
  };
  return (
    <CommonContext.Provider value={contextValues}>
      <MyStack />
    </CommonContext.Provider>
  );
}
export const useValues = () => useContext(CommonContext);
