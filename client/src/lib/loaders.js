import apiRequest from "./apiRequest"

export const SinglePageLoader = async ({ request, params }) => {
    const response = await apiRequest("/posts/" + params.id)
    return response.data
}