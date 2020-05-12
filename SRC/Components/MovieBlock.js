import React from "react"
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image,
	Animated,
} from "react-native"
import {
	TouchableWithoutFeedback,
	FlatList,
} from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { connect } from "react-redux"
import { selectShow } from "../Redux/Actions"
import { FontAwesome } from "@expo/vector-icons"

class MovieBlock extends React.Component {
	state = {
		actualHeight: Dimensions.get("window").height,
		actualWidth: Dimensions.get("window").width,
	}

	blockStyle = StyleSheet.create({
		blockView: {
			marginRight: this.state.actualWidth * this.props.marRightProp,
			marginLeft: this.props.marLeftProp,
			marginBottom: this.props.marBottomProp,
		},
		blockPoster: {
			height: "70%",
			width: "100%",
			borderRadius: 20,
			height: this.state.actualHeight * this.props.heightProp,
			width: this.state.actualWidth * this.props.widthProp,
		},
	})

	componentDidMount() {}

	render() {
		return (
			<TouchableWithoutFeedback
				onPress={() => {
					this.props.NavigationProp.navigate("FullShowInfo", {
						name: this.props.allDataProp.name,
					})
					this.props.selectShow(this.props.allDataProp)
				}}
				style={this.blockStyle.blockView}
			>
				<Image
					style={this.blockStyle.blockPoster}
					source={{ uri: `${this.props.allDataProp.image.medium}` }}
				/>

				<Text
					style={{
						fontSize: 13,
						color: "white",
						marginTop: 10,
						fontWeight: "bold",
					}}
				>
					{this.props.allDataProp.name}
				</Text>
				<View
					style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
				>
					<FontAwesome name="star" color="yellow" size={15} />
					<Text
						style={{
							color: "white",
							fontSize: 15,
							marginLeft: 6,
						}}
					>
						{this.props.allDataProp.rating.average}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 8,
						marginBottom: 20,
					}}
				>
					<Text style={{ color: "white", fontSize: 10, fontWeight: "300" }}>
						{this.props.allDataProp.genres[0]}
					</Text>
					<Text
						style={{
							color: "white",
							fontSize: 10,
							fontWeight: "300",
							marginHorizontal: 5,
						}}
					>
						|
					</Text>
					<Text style={{ color: "white", fontSize: 10, fontWeight: "300" }}>
						{this.props.allDataProp.genres[0]}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}

function MovieBlockFunction(props) {
	var Navigation = useNavigation()
	return <MovieBlock {...props} NavigationProp={Navigation} />
}

export default connect(mapStateToProps, { selectShow: selectShow })(
	MovieBlockFunction
)
