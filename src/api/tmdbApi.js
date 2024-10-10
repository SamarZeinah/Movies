import axiosClient from "./axiosClient";

// كائن لتحديد ما إذا كان التصنيف للأفلام أو للبرامج التلفزيونية
export const category={
    movie:'movie',    // التصنيف للأفلام
    tv:'tv'          // التصنيف للبرامج التلفزيونية
}

// كائن يحتوي على الأنواع المختلفة للأفلام التي يمكن استرجاعها
export const movieType={
    upcoming: 'upcoming',  // الأفلام القادمة
    popular: 'popular',    // الأفلام المشهورة
    top_rated: 'top_rated' // الأفلام الأعلى تقييمًا
    }


export const tvType={
    popular: 'popular',      // البرامج المشهورة
    top_rated: 'top_rated',  // البرامج الأعلى تقييمًا
    on_the_air: 'on_the_air' // البرامج التي يتم عرضها حاليًا 
}

//TMDB API كائن يحتوي على دوال لاسترجاع بيانات من
const tmdbaApi={
    //دالة لاسترجاع قائمة الأفلام 
    getMoviesList:(type,params)=>{
        const url='movie/'+movieType[type];
        return axiosClient.get(url, params);     // لاسترجاع البيانات GET إرسال طلب   
    },
    getTvList:(type,params)=>{
    const url='tv/'+tvType[type];
    return axiosClient.get(url, params); 
    },
    //movie أو tv داله لاسترجاع فيديو بناءا ع التصنيف 
    getVideos:(cate,id)=>{
    const url=category[cate]+'/'+id+'/videos'; //url تكوين ال 
    return axiosClient.get(url, {params:{}}); 
    },
    //داله البحث
    search:(cate,id)=>{
        const url='search/'+category[cate];
        return axiosClient.get(url, {params:{}}); 
    },

    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;
