import React from "react"
import { View, Text, StatusBar, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { getdata, getBest, getComedy, getAnimation } from "../Redux/Actions"
import MovieView from "../Components/MovieView"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign } from "@expo/vector-icons"

class HomePage extends React.Component {
	componentDidMount() {
		this.props.getdata()
	}

	componentDidUpdate(preProp) {
		if (preProp.allMovieData !== this.props.allMovieData) {
			if (
				this.props.bestShows.length === 0 &&
				this.props.comedyShows.length === 0 &&
				this.props.animatedShows.length === 0
			) {
				this.props.allMovieData.map((show, index, arr) => {
					if (show.rating.average >= 9) {
						this.props.getBest(show)
					}

					// if (index === arr.length - 1) {
					// 	console.log("Done")
					// 	console.log(this.state.bestDone)
					// }

					show.genres.map((gen) => {
						if (gen === "Comedy") {
							this.props.getComedy(show)
						}
					})
					if (show.type === "Animation") {
						var x = 0

						show.genres.map((gen, index, arr) => {
							if (gen === "Anime") {
								x = 1
							}
							if (index === arr.length - 1) {
								if (x === 0) {
									this.props.getAnimation(show)
								}
							}
						})
					}
				})
			}
		}
	}

	renderThis = () => {
		if (
			this.props.bestShows.length > 0 &&
			this.props.comedyShows.length > 0 &&
			this.props.animatedShows.length > 0
		) {
			return (
				<>
					<MovieView
						whatToSearchProp={this.props.bestShows}
						headNameProp="Most Popular"
					/>
					<MovieView
						whatToSearchProp={this.props.comedyShows}
						headNameProp="Comedy"
					/>

					<MovieView
						whatToSearchProp={this.props.animatedShows}
						headNameProp="Animation"
					/>
				</>
			)
		} else {
			return (
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
					}}
				>
					<Text>Loading...</Text>
				</View>
			)
		}
	}

	render() {
		return (
			<SafeAreaView style={{ backgroundColor: "black" }}>
				<StatusBar barStyle="light-content" />

				<Text
					style={{
						color: "white",
						fontWeight: "bold",
						alignSelf: "center",
						fontSize: 65,
						letterSpacing: 20,
						width: "90%",
						transform: [{ translateX: 10 }],
					}}
				>
					SERIES
				</Text>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={{
							height: 50,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginVertical: 10,
						}}
					>
						<TextInput
							style={{
								height: "70%",
								width: "80%",
								backgroundColor: "white",
								marginLeft: 10,
								borderRadius: 25,
								paddingHorizontal: 10,
							}}
						/>
						<TouchableOpacity
							style={{
								backgroundColor: "lightskyblue",
								height: 35,
								width: 35,
								borderRadius: 50,
								alignItems: "center",
								justifyContent: "center",
								marginRight: 10,
							}}
						>
							<AntDesign name="search1" color="white" size={17} />
						</TouchableOpacity>
					</View>
					{this.renderThis()}
				</ScrollView>
			</SafeAreaView>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, {
	getdata: getdata,
	getBest: getBest,
	getComedy: getComedy,
	getAnimation: getAnimation,
})(HomePage)
