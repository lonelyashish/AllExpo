import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import SignIn from '../screens/before/signIn/SignIn';
import SignUp from '../screens/before/signUp/SignUp';
import Home from '../screens/after/home/Home';
import Cart from '../screens/after/cart/Cart';

const Stack = createNativeStackNavigator();

const AppNavigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cart" screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#000' },
                gestureEnabled: true,

            }}>
                <Stack.Screen name="SignIn" component={SignIn} options={{
                     title: 'Sign In',
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title=" skip "
                            color="#00cc00"
                        />
                    ),
                    headerShown: true,
                }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{
                    headerShown: true, 
                    title: 'Sign Up',
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title=" skip "
                            color="#00cc00"
                        />
                    ),
                    headerShown: true,
                }} />
                <Stack.Screen name="Home" component={Home}  options={{
                    
                    headerShown: true,
                    title: 'Home',
                    headerRight: () => (
                        <Button
                        onPress={() => navigation.navigate("Cart")}
                            title=" Cart "
                            color="#00cc00"
                        />
                    ),
                    headerShown: true,
                }} />
                <Stack.Screen name="Cart" component={Cart} 
                options={{
                    
                    headerShown: true,
                    title: 'Cart',
                    
                    // headerRight: () => (
                    //     <Button
                    //     onPress={() => navigation.navigate("Cart")}
                    //         title=" Cart "
                    //         color="#00cc00"
                    //     />
                    // ),
                    headerShown: true,
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
