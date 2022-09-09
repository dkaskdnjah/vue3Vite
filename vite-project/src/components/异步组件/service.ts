type data = {
    name: string,
    age: number
}
export const axios = (url: string):Promise<data[]> => {
    return new Promise((resolve)=> {
        const xml = new XMLHttpRequest()

        xml.onreadystatechange = () => {
            if (xml.readyState === 4 && xml.status === 200) {
                setTimeout(()=> {
                    resolve(JSON.parse(xml.responseText))
                }, 2000)
            }
        }

        xml.open('GET', url)

        xml.send(null)
    })
}