import axios from "axios";




const Api_key="24069957-3c896ed13f54eb41063e889a4"
const url="https://pixabay.com/api/"


export const getimages = (text,count) => {
    try{ const data= axios.get(`${url}/?key=${Api_key}&q=${text}&image_type=photo&per_page=${count}`)
    return data;

    }catch(error){
        console.log(error);

    }
}