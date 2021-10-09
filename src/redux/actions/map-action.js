import { mapAPI } from "../../api/api";
import { MAP_VARIABLES } from "../variables";

export const actions = {
    getAirport : (data) => ({type: MAP_VARIABLES.GET_AIRPORT, payload: data})
}

export const searchAirportsThunk = (search) => async (dispatch) => {
    const response = await mapAPI.searchAirport(search);
    console.log(response.data)
    dispatch(actions.getAirport(response.data))
}