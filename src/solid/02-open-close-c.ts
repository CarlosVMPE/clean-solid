//import axios from 'axios';

export class HttpClient {
    //* With Axios
    /* async get(url: string) {
        const { data, status } = await axios.get(url);
        return { data, status };
    } */
    
    //* With fetch
    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();

        return { data, status: resp.status };
    }
}