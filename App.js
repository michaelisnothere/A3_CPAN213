import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/signIn';
import Dashboard from './screens/dashboard';
import Booking from './screens/bookingInfo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RoomListScreen from './screens/RoomListScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const headerOptions = {
    headerStyle: { backgroundColor: 'white' },
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
    headerBackVisible: false,
  };

  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn" screenOptions={headerOptions}>
            <Stack.Screen component={SignIn} name="SignIn" />
            <Stack.Screen component={Dashboard} name="Dashboard" />
            <Stack.Screen component={Booking} name="Booking" />
            <Stack.Screen component={RoomListScreen} name="RoomList" />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
    </Provider>
  );
}