import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import { createStaticNavigation, StaticParamList, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../features/home/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import Icon from '../shared/components/icons/Icon';
import Details from '../features/details/Details';
import BookingForm from '../features/booking-form/BookingForm';
import { colors } from '../theme/colors';
import { View } from 'react-native';

const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarShowLabel: false,
    tabBarActiveTintColor: colors.blackMedium,
    tabBarInactiveTintColor: colors.grayMedium,
    tabBarStyle: {
      borderTopWidth: 0,
      elevation: 0,

    }
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => (
          <View style={ { alignItems: 'center', gap: 4 } }>
            <Icon name={ 'home-outline' } color={ color } size={ size } />
            { focused && (
              <View style={ {
                width: 6,
                height: 6,
                borderRadius: 99,
                backgroundColor: '#FF4444'  // 👈 or colors.error
              } } />
            ) }
          </View>
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => (
          <View style={ { alignItems: 'center', gap: 4 } }>
            <Icon name='time-outline' color={ color } size={ size } />
            { focused && (
              <View style={ {
                width: 6,
                height: 6,
                borderRadius: 99,
                backgroundColor: '#FF4444'
              } } />
            ) }
          </View>
        ),
      },
    },
    Profile: {
      screen: Updates,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => (
          <View style={ { alignItems: 'center', gap: 4 } }>
            <Icon name='heart-outline' color={ color } size={ size } />
            { focused && (
              <View style={ {
                width: 6,
                height: 6,
                borderRadius: 99,
                backgroundColor: '#FF4444'
              } } />
            ) }
          </View>
        ),
      },
    },
    Favorate: {
      screen: Updates,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => (
          <View style={ { alignItems: 'center', gap: 4 } }>
            <Icon name='person-outline' color={ color } size={ size } />
            { focused && (
              <View style={ {
                width: 6,
                height: 6,
                borderRadius: 99,
                backgroundColor: '#FF4444'  // 👈 or colors.error
              } } />
            ) }
          </View>
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${ value }`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={ navigation.goBack }>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
    Details: {
      screen: Details,
      options: { headerShown: false },
      linking: {
        path: 'details/:id',
      },
    },
    BookingForm: {
      screen: BookingForm,
      options: { headerShown: false },
      linking: {
        path: 'details/:id/form',
      },

    }
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack> & {
  Details: { id: string }
  BookingForm: { id: string }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
