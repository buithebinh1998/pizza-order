import axios from 'axios'

const callApi = (api, method, body) => {
    return axios({
        method: method,
        url: `${api}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}

export default callApi;