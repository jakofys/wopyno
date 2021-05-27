const axios = require('axios')
const endpoint = "http://localhost:5000/"

export const api = async (data) => {
    if ( data.action == "version" ){
        let promise = await axios.get(endpoint + "version")
        return {
            Wopyno: promise.data,
            CLI: "NodeJS CLI Version 0.1"
        }
    }else{
        const param = {
            text: data.text,
            number: parseInt(data.number),
        }
        let promise = await axios.post(endpoint + data.action, param, {headers: {"Content-Type": "application/json"}})
        return promise.data
    }
}