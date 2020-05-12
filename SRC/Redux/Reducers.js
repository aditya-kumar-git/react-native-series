import { combineReducers } from "redux"

var allMovieData = (iniState = [], action) => {
	switch (action.type) {
		case "GET_MOVIES": {
			return action.payload
		}
		default: {
			return iniState
		}
	}
}

var bestShows = (iniState = [], action) => {
	switch (action.type) {
		case "BEST": {
			return [...iniState, action.payload]
		}
		default: {
			return iniState
		}
	}
}
var comedyShows = (iniState = [], action) => {
	switch (action.type) {
		case "COMEDY": {
			return [...iniState, action.payload]
		}
		default: {
			return iniState
		}
	}
}

var animatedShows = (iniState = [], action) => {
	switch (action.type) {
		case "ANIMATED": {
			return [...iniState, action.payload]
		}
		default: {
			return iniState
		}
	}
}

var selectedShow = (iniState = [], action) => {
	switch (action.type) {
		case "SELECTED": {
			return action.payload
		}
		default: {
			return iniState
		}
	}
}

var allReducers = combineReducers({
	allMovieData: allMovieData,
	bestShows: bestShows,
	comedyShows: comedyShows,

	animatedShows: animatedShows,
	selectedShow: selectedShow,
})

export default allReducers
