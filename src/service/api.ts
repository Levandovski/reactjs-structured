import axios from 'axios';

const Api = () => {

    const hostname: string = document.location.hostname;
    let host: string = '';

    switch (hostname) {
        case 'https://sistema.com.br':
            host = 'https://api.com.br';
            break;
        default:
            host = 'https://api.com.br';
    }

    const api = axios.create(({
        baseURL: host,
        headers: {
            'Content-Type': 'application/json',
        }
    }));

    return api;

}

export default Api;