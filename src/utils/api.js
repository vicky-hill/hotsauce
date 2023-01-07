import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/hotsauce/",
});

instance.interceptors.request.use((config) => {
    const token = typeof window !== "undefined" && localStorage.getItem("token");
    config.headers['x-auth-token']  = token ? token : ''
    return config;
});

const api = {
    get:
        (options, select = null) =>
            async (dispatch) => {
                const [success, failure] = options.types;
                const promise = (resolve, reject) => {
                    return instance
                        .get(options.url)
                        .then((res) => {
                            resolve(
                                dispatch({
                                    type: success,
                                    payload: res.data,
                                })
                            );
                        })
                        .catch((err) => {
                            reject(
                                dispatch({
                                    type: failure,
                                    payload: err,
                                })
                            );
                        });
                };

                return new Promise(promise);
            },
    post:
        (options, params = null) =>
            async (dispatch) => {
                console.log('dispatching something')
                const [success, failure] = options.types;
                const promise = (resolve, reject) => {
                    instance
                        .post(options.url, params)
                        .then((res) => {
                            resolve(
                                dispatch({
                                    type: success,
                                    payload: res.data,
                                })
                            );
                        })
                        .catch((err) => {
                            console.log(err);
                            reject(
                                dispatch({
                                    type: failure,
                                    payload: err,
                                })
                            );
                        });
                };

                return new Promise(promise);
            },
    put:
        (options, params = null) =>
            async (dispatch) => {
                const [success, failure] = options.types;
                const promise = (resolve, reject) => {
                    instance
                        .put(options.url, params)
                        .then((res) => {
                            resolve(
                                dispatch({
                                    type: success,
                                    payload: res.data,
                                })
                            );
                        })
                        .catch((err) => {
                            reject(
                                dispatch({
                                    type: failure,
                                    payload: err,
                                })
                            );
                        });
                };

                return new Promise(promise);
            },
    delete:
        (options, noLoading = false) =>
            async (dispatch) => {
                const [success, failure] = options.types;
                const promise = (resolve, reject) => {
                    instance
                        .delete(options.url)
                        .then((res) => {
                            resolve(
                                dispatch({
                                    type: success,
                                    payload: res.data,
                                })
                            );
                        })
                        .catch((err) => {
                            reject(
                                dispatch({
                                    type: failure,
                                    payload: err,
                                })
                            );
                        });
                };

                return new Promise(promise);
            },
};

export { api };
