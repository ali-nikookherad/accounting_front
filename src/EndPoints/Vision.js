import { baseUrl } from '../Config/Settings';
export async function getVisonsEndPoint() {
    let response = await fetch(baseUrl + "api/v1/visions", { "method": "GET" });
    return await response.json();
}


export async function updatePlanStatusEndPoint(id) {
    let response = await fetch(baseUrl + `api/v1/visions/` + id, {
        "method": "Post",
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
            'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ "_method": 'patch' })
    })

    return await response;
}