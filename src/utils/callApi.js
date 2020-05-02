import axios from 'axios'

const callApi = (api, method, body) => {
    let config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    return axios({
        method: method,
        url: `${api}`,
        data: body,
        crossdomain: true,
        config: config
    }).catch(err => {
        console.log(err);
    });
}

export default callApi;