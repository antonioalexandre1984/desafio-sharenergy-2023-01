import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001'
});

export default api;

/* const URL = 'https://randomuser.me/'; */
/* const HTTP_CODE_STATUS = "https://http.cat"

interface Status {
    code: number;
}
 */
/* async function getHttpCodeStatus({ code }: Status) {
    const response = await axios.get(`${HTTP_CODE_STATUS}/${code}`);
    console.log("resposta da api HTTP", response);
    return (response.data);
} */



