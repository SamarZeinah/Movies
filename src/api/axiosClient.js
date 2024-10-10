//HTTP هي مكتبة شائعة في التايب اسكريبت والجافا تُستخدم لإجراء طلبات
import axios from "axios";
//URL إلى سلاسل استعلام JavaScript  تُستخدم لإجراء طلبات
//(name=John&age=30?) الى { name: 'John', age: 30 } تحويل
import queryString from 'quer-string';
// baseUrl,apiKey الذى يحتوى على معلومات زى API يستورد إعدادات 
import apiConfig from "./apiConfig";

//axios تقوم بإنشاء عميل مخصص باستخدام مكتبة
//الفكره منها انى بعملها علشان محتجش انى اعمل اعاده تحديد للاعدادات مع كل طلب
const axiosClient=axios.create({
//اى طلب هبعته هيتبعت للعنوان دا
    baseURL:apiConfig.baseUrl,
    //يحدد نوع البيانات التي سيتم إرسالها مع الطلبات
    //JSON البيانات المرسلة ستكون بتنسيق
    headers:{
        'Content-Type':'application/json'
    },
    //URL يتم إلحاقها بعنوان query string التي ترسلها في الطلب إلى سلسلة استعلام parameters تقوم بتحويل المعاملات
    //إلى المعاملات التي تمررها apiConfig  من ملف api_key الإضافة إلى ذلك، يتم تلقائياً إضافة
    //Ex  para=>{ name: 'John' }   يتم تحويلها الى سلسله استعلام==>?name=John&api_key=YOUR_API_KEY
    paramsSerializer:params=>queryString.stringify({...params,api_key:apiConfig.apikey})
});
// axios  في interceptors  الجزء المتعلق بـ
//تتيح لك تعديل الطلبات  قبل أن تصل إلى وجهتها النهائية 
//يتم استدعاؤه قبل إرسال كل طلب. interceptor 
//config==>,params,url,headers هو الكائن الذي يحتوي على إعدادات الطلب 
//بأي شكل، ولكن يتم تمريره كما هو إلى الطلب النهائيconfig  هنا، لا يتم تعديل الـ
axiosClient.interceptors.request.use(async (config) => config);
// أو الأخطاء التي تنتج عن الطلباتresponses هذا الجزء مخصص لمعالجة الردود 
axiosClient.interceptors.response.use((response) => {
   //if (response && response.data)==>response.data ذا كان الرد يحتوي على بياناتسيتم إرجاع البيانات فقط
    if (response && response.data) {
        return response.data;
    }

    return response;
    //لو حدث خطأ يرجع الخطأ
}, (error) => {
    throw error;
});

export default axiosClient;