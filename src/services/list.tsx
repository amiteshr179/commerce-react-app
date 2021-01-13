export function getList (url: string): Promise<any> {
    return fetch(url,{
        headers: {
            "secret-key":
                "$2b$10$sa4115YFvIlKJPuv2OWyV.aj0/20AIkekgNyPj3MSLBK0i3XTWE7q",
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })

}
