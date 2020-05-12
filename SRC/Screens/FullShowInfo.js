import React from "react"
import {
	View,
	Text,
	Image,
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	StatusBar,
} from "react-native"
import { connect } from "react-redux"
import {
	FlatList,
	TouchableOpacity,
	ScrollView,
} from "react-native-gesture-handler"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

class FullShowInfo extends React.Component {
	render() {
		var { selectedShow } = this.props

		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="light-content" />
				<ImageBackground
					style={fullStyle.fullImage}
					source={{ uri: selectedShow.image.original }}
				>
					<SafeAreaView style={fullStyle.overlay}>
						<View style={fullStyle.overlayContainer}>
							<TouchableOpacity
								onPress={() => {
									this.props.Navigation.goBack()
								}}
								style={{ marginVertical: 10 }}
							>
								<AntDesign name="leftcircle" color="white" size={25} />
							</TouchableOpacity>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										color: "white",
										fontSize: 30,
										fontWeight: "bold",
										textAlign: "center",
									}}
								>
									{selectedShow.name.toUpperCase()}
								</Text>
								<Text
									style={{ color: "white", fontWeight: "200", fontSize: 20 }}
								>
									( {selectedShow.premiered.slice(0, 4)} )
								</Text>
							</View>
							<View style={{ flexDirection: "row", marginBottom: 20 }}>
								<FlatList
									scrollEnabled={false}
									horizontal
									data={selectedShow.genres}
									renderItem={(x) => {
										return (
											<Text style={{ color: "white", marginRight: 10 }}>
												{x.item}
											</Text>
										)
									}}
									keyExtractor={(x, y) => {
										return "KeyGenres-" + y
									}}
									ListFooterComponent={() => {
										return (
											<View
												style={{
													alignItems: "center",
													flexDirection: "row",
												}}
											>
												<View
													style={{
														backgroundColor: "white",
														height: 5,
														width: 5,
														borderRadius: 5,
														marginRight: 10,
													}}
												></View>
												<Text style={{ color: "white" }}>
													{selectedShow.runtime} min
												</Text>
											</View>
										)
									}}
								/>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 20,
								}}
							>
								<View
									style={{
										borderColor: "lightgreen",
										width: 55,
										height: 55,
										alignItems: "center",
										justifyContent: "center",
										borderRadius: 30,
										borderWidth: 3,
									}}
								>
									<Text style={{ color: "white", fontSize: 15 }}>
										{selectedShow.rating.average}/10
									</Text>
								</View>
								<View style={{ marginLeft: 10 }}>
									<Text style={{ color: "white", fontWeight: "bold" }}>
										User
									</Text>
									<Text style={{ color: "white", fontWeight: "bold" }}>
										Score
									</Text>
								</View>
							</View>
							<View
								style={{
									alignSelf: "flex-start",
									borderBottomColor: "lightskyblue",
									borderBottomWidth: 2,
								}}
							>
								<Text style={{ color: "white", fontSize: 24 }}>Overview</Text>
							</View>
							<ScrollView>
								<Text style={{ color: "white", fontSize: 18, marginTop: 15 }}>
									{selectedShow.summary.replace(/p>|b>|i>|<|[/]/g, "")}
								</Text>
							</ScrollView>
						</View>
					</SafeAreaView>
				</ImageBackground>
			</View>
		)
	}
}

var fullStyle = StyleSheet.create({
	fullImage: {
		width: "100%",
		height: "100%",
	},
	overlay: {
		backgroundColor: "rgba(0,0,0,0.7)",
		flex: 1,
		alignItems: "center",
	},
	overlayContainer: {
		height: "100%",
		width: "95%",
	},
})

var mapStateToProps = (state) => {
	return state
}

var fullshowFunction = (props) => {
	var Navigation = useNavigation()

	return <FullShowInfo {...props} Navigation={Navigation} />
}

export default connect(mapStateToProps)(fullshowFunction)
