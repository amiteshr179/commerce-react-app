
export function getList() {
    return fetch('https://api.myjson.com/bins/j82l2')
        .then((data: any list) => data.json())
}
