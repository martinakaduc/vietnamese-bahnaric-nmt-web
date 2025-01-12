import axios from 'axios';

const baseUrl = 'http://localhost:8000/'
// const baseUrl = 'https://vi-ba-nmt-api-proxy.herokuapp.com';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 500000,
});

const textTranslateAPI = (text, model) => {
    return instance.post('/translate/text', {
        'text': text,
        'model': model
    })
}

const fileTranslateAPI = (file, model) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', model);
    return instance.post('/translate/file', formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}

const getModelsAPI = () => {
    return instance.get('/models')
}

const ttsAPI = (text) => {
    return instance.post('/tts/speak', {
        'text': text
    }, {
        baseURL: 'http://www.ura.hcmut.edu.vn'
    })
}

export {
    textTranslateAPI,
    fileTranslateAPI,
    getModelsAPI,
    ttsAPI
};