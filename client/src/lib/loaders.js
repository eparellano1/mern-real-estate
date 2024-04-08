import apiRequest from "./apiRequest"
import { defer } from "react-router-dom"

export const SinglePageLoader = async ({ request, params }) => {
    const response = await apiRequest("/posts/" + params.id)
    return response.data
}

export const ListPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1]
    const postPromise = await apiRequest("/posts?" + query)
    return defer({
        postResponse: postPromise
    })
}