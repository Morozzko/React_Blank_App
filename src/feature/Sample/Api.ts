import {instance} from "../../api/Api";
import {usersArrtayType} from "./reducer/reducer";


export const UniversalApi = {
    async get() {
        return await instance.get<usersArrtayType[]>("todos/")
    }
}