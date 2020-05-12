import React from "react"
import { View, Text, SafeAreaView, StatusBar } from "react-native"
import { connect } from "react-redux"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import MovieBlock from "../Components/MovieBlock"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

class GenreList extends React.Component {
	render() {
		var { whatToSearch, titleName } = this.props.route.params

		return (
			<SafeAreaView
				style={{
					// alignItems: "center",
					backgroundColor: "black",
					flex: 1,
				}}
			>
				<View style={{ width: "100%", paddingLeft: 20 }}>
					<TouchableOpacity
						onPress={() => {
							this.props.Navigation.goBack()
						}}
					>
						<AntDesign
							name="leftcircle"
							color="white"
							size={25}
							style={{
								marginVertical: 15,
							}}
						/>
					</TouchableOpacity>
					<Text
						style={{
							fontSize: 35,
							letterSpacing: 6,
							marginBottom: 20,
							color: "white",

							fontWeight: "bold",
						}}
					>
						{titleName}
					</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}
				>
					<FlatList
						data={whatToSearch}
						renderItem={(x) => {
							return (
								<MovieBlock
									heightProp={0.4}
									widthProp={0.45}
									allDataProp={x.item}
									marRightProp={0}
									marLeftProp={12}
									marBottomProp={20}
								/>
							)
						}}
						keyExtractor={(x) => {
							return "IdLIST-" + x.id
						}}
						numColumns={2}
					/>
				</View>
			</SafeAreaView>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}

var GenreListFunction = (props) => {
	var Navigation = useNavigation()

	return <GenreList {...props} Navigation={Navigation} />
}

export default connect(mapStateToProps)(GenreListFunction)
