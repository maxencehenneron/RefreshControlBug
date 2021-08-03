import * as React from 'react';
import {Text, ScrollView, RefreshControl, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
          }}
          contentInsetAdjustmentBehavior={'always'}
        />
      }>
      <Text>Home Screen</Text>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerLargeTitle: true}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
