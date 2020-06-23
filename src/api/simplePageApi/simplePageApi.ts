import {GetItemsType, instance} from "./Api";

export const SearchPageApi = {
    getUsers(userForSearch = "", currentPage = 1, objectPerPage = 10) {
        return instance.get<GetItemsType>("search/users?q=" + userForSearch + "&page=" + currentPage + "&per_page=" + objectPerPage)
            .then(res => res.data)
    },
    getReposFromUser(user:string){
        return instance.get<any>("https://api.github.com/users/"+user+"/repos")
            .then(res => res.data)
    }
}