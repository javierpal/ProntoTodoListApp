import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import { Ionicons, Feather, FontAwesome, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MainComponent from './pages/main';

import todoReducer from './store/reducers/todo';

const rootReducer = combineReducers({
  login: todoReducer
});

const store = createStore(rootReducer);

const fetchFonts = () =>{
  return Font.loadAsync({
    ...Ionicons.font,
    ...Feather.font,
    ...FontAwesome.font,
    ...MaterialCommunityIcons.font,
    ...EvilIcons.font,
    ...Entypo.font,
    'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
}

const _handleLoadingError = error => {
  console.warn(error);
};

export default function App(){

  const [fontLoaded, setFontLoaded]= useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={_handleLoadingError}
        onFinish={()=>setFontLoaded(true)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
