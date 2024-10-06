import axios from 'axios';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com/'

const sliderImageList = `${apiBaseUrl}/photos`

const apiCall=async (endpoint, params)=>{
    const options = {
        methods: 'GET',
        url:endpoint,
        params: params?params: {}
    }    

    try{
        const responce = await axios.request(options)
        return responce.data
    }catch(err){
        console.log("error : " + err);
        return {}
    }    
}

export const fetchSliderImages = ()=>{
     axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
        return response.data;
    })
}

