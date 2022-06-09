import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieView from '../views/MovieView';
import SearchView from '../views/SearchView';
import TvView from '../views/TvView';
import DetailView from '../views/DetailView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const MainNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="movies"
            screenOptions={{
                tabBarLabelStyle: { textTransform: 'none', fontWeight: '500' },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#c7c7c7'
            }}>
            <Tab.Screen
                name='movies'
                options={{ tabBarLabel: 'Movies' }}
                component={MovieView}/>
            <Tab.Screen 
                name='search'
                options={{ tabBarLabel: 'Search' }}
                component={SearchView}/>
            <Tab.Screen
                name='tv'
                options={{ tabBarLabel: 'TV Shows' }}
                component={TvView}/>
        </Tab.Navigator>
    );
}

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name='Movies App' 
            component={MainNav}
            options={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#27445C'
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    width: '100%',
                    fontSize: 18
                }
            }}
            title='Movie'/>
            <Stack.Screen
                name="details"
                component={DetailView}
                options={({route}) => ({
                    id: route.params.id,
                    title: route.params.title,
                })}/>
        </Stack.Navigator>
    </NavigationContainer>
)


export default AppStack;