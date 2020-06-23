import axios from "axios"


export const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://api.github.com/'
});

export type GetItemsType = {

    items: Array<any>
    total_count: number

}