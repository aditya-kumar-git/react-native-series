import React from "react"
import myStore from "./SRC/Redux/Store"
import { Provider } from "react-redux"
import HomePage from "./SRC/Screens/HomePage"
import FullShowInfo from "./SRC/Screens/FullShowInfo"
import GenreList from "./SRC/Screens/GenreList"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

export default function App() {
	var Stack = createStackNavigator()

	return (
		<Provider store={myStore}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Series"
						component={HomePage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="FullShowInfo"
						component={FullShowInfo}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="GenreList"
						component={GenreList}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
