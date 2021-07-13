import getCatPic from "./api.js";

const button = document.getElementById("catButton");

button.addEventListener("click", async (event) => {
    event.preventDefault();

    const picURL = await getCatPic();

    document.getElementById("pic").src = picURL;



})