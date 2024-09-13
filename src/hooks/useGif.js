
import axios from 'axios';  
import { useState } from 'react';



const API_KEY = "FYFVu3jzWGehbdFdCk8Ne7wwGJg8S4cw";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState("");
    const[loading, setLoading] = useState(false);

    async function fetchData(tag){
        setLoading(true);
        const{data} = await axios.get(tag ? `${url}&tag=${tag}`: url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }



    return{gif,loading,fetchData};


};

export default useGif;
