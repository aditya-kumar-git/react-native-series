import Axios from "axios"

export var getdata = () => {
	return async (dispatch) => {
		var output = await Axios({
			url: "http://api.tvmaze.com/shows",
		})

		try {
			dispatch({ type: "GET_MOVIES", payload: output.data })
		} catch (error) {
			console.log(error)
		}
	}
}

export var getBest = (data) => {
	return { type: "BEST", payload: data }
}
export var getComedy = (data) => {
	return { type: "COMEDY", payload: data }
}

export var getAnimation = (data) => {
	return { type: "ANIMATED", payload: data }
}
export var selectShow = (data) => {
	return { type: "SELECTED", payload: data }
}
