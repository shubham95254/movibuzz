import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjBhY2VmZTgzMmM2MTk5ZDA4NDYyZDRmYjkzZTgxOSIsInN1YiI6IjY1NzZjYjAwNTY0ZWM3MDBjNDczYmYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s6xbNSqoK2hVfu64rycwsx8xoj8ur-MEVAieNz7bpQU" };

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;

    } catch (error) {
        console.log(error);
        return error;
    }
}
