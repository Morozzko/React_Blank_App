import { instance } from '../../../api/Api'

export const RestAPI = {
  async get() {
    return await instance.get<{}>('todos/')
  },
}
