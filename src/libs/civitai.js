

const APIURL = "https://civitai.com/api/v1/images";

export const getImages = async (nextPage, limit = 200) => {
    const url = nextPage || APIURL +"?limit="+limit;
    const response = await fetch(url);
    return response.json()
};