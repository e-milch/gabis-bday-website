
const getCatPic = async () => {
    
    const responsePromise = fetch('https://api.thecatapi.com/v1/images/search');
    const response = await responsePromise;
    const jsonResponse = await response.json();
    const url = jsonResponse[0].url
    console.log(url);
    return url;
};

export default getCatPic;