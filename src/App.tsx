import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DefaultTheme } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './theme/colors';

Asset.loadAsync([
  ...NavigationAssets,
]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export function App() {

  const theme = DefaultTheme

  return (

    <SafeAreaProvider>
      <Navigation
        theme={ {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: colors.white,
          }
        } }
        linking={ {
          enabled: 'auto',
          prefixes: [ prefix ],
        } }
        onReady={ () => {
          SplashScreen.hideAsync();
        } }
      />
    </SafeAreaProvider>
  );
}
