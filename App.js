import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import AddScreen from './AddScreen';
import ViewScreen from './ViewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Story App' }}
        />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Add')}
        style={{ margin: 20 }}
      >
        Add Story
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('View')}
        style={{ margin: 20 }}
      >
        View Story
      </Button>
    </React.Fragment>
  );
};

export default App;
