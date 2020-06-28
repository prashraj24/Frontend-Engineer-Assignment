import axios from 'axios';

const URL = 'https://run.mocky.io/v3/9fc6c82f-3fde-431d-b1e5-0a1982928cb4';

export const fetchCardData = async () => {
    const { data } = await axios.get(URL);

    console.log ('Data:  ' + data);

    return data;
    
}