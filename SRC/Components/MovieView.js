import React from "react"
import {
	View,
	Text,
	FlatList,
	Dimensions,
	TouchableOpacity,
} from "react-native"
import { connect } from "react-redux"
import MovieBlock from "./MovieBlock"
import { useNavigation } from "@react-navigation/native"

class MovieView extends React.Component {
	state = {
		actualHeight: Dimensions.get("window").height,
		actualWidth: Dimensions.get("window").width,
	}
	render() {
		return (
			<View>
				<Text
					style={{
						fontSize: 30,
						letterSpacing: 6,
						marginBottom: 20,
						color: "white",
						marginLeft: 10,
						fontWeight: "bold",
					}}
				>
					{this.props.headNameProp.toUpperCase()}
				</Text>

				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					data={this.props.whatToSearchProp.slice(0, 10)}
					renderItem={(x) => {
						return (
							<MovieBlock
								heightProp={0.35}
								widthProp={0.4}
								allDataProp={x.item}
								marRightProp={0}
								marBottomProp={0}
								marLeftProp={10}
							/>
						)
					}}
					keyExtractor={(x) => {
						return "Id-" + x.id
					}}
					ListFooterComponent={() => {
						return (
							<View
								style={{
									height: this.state.actualHeight * 0.35,
									marginRight: this.state.actualWidth * 0.04,
									width: this.state.actualWidth * 0.4,
									alignItems: "center",
									justifyContent: "space-evenly",
									paddingVertical: 5,
									marginLeft: 10,
								}}
							>
								<TouchableOpacity
									onPress={() => {
										this.props.Navigation.navigate("GenreList", {
											whatToSearch: this.props.whatToSearchProp,
											titleName: this.props.headNameProp.toUpperCase(),
										})
									}}
									style={{
										backgroundColor: "lightskyblue",
										height: 100,
										width: 100,
										borderRadius: 150,
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Text
										style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
									>
										See More
									</Text>
								</TouchableOpacity>
							</View>
						)
					}}
				/>
			</View>
		)
	}
}
var mapStateToProps = (state) => {
	return state
}

var MovieViewFunction = (props) => {
	var Navigation = useNavigation()

	return <MovieView {...props} Navigation={Navigation} />
}

export default connect(mapStateToProps)(MovieViewFunction)
