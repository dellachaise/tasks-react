import jwtDecode from "jwt-decode";


function checkToken() {
    let token = localStorage.getItem("token"),
        currentData = new Date().getTime() / 1000,
        exp;

    // if (token === null) {
    //     return undefined;
    // }
    exp = jwtDecode(token).exp;

    if (exp > currentData) {
        return token;
    }
    localStorage.removeItem("token");
    return undefined;
}

function parseJSON(response) {
    return new Promise(function (resolve, reject) {
        response.json().
            then(data => {
                return resolve({
                    "json": data,
                    "status": response.status
                });
            }, reject);
    });
}


export default function api(url, options) {
    return new Promise((resolve, reject) => {
        let token = checkToken();

        options = options || {};
        options = Object.assign({
            headers: {
                "Content-Type": "application/json"
            }
        }, options);
        if (token) {
            options.headers.Authorization = "JWT " + token;
        }
        fetch("http://127.0.0.1:8000/" + url, options)
            .then(parseJSON)
            .then(data => resolve(data), reject);
    });

}

export function post(url, body, options) {
    options = options || {};
    options = Object.assign(options, {
        method: "post",
        body: JSON.stringify(body)
    });
    return api(url, options);
}
