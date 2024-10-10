const { original } = require("@reduxjs/toolkit");

const apiConfig={
    baseUrl:"https://api.themoviedb.org/3/",
    apikey:'e5bb1f20519b1de50d6a197e8da72668',
   originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`


}
export default apiConfig


