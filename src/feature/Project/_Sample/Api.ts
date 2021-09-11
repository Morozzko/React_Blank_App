import { instance } from '../../../api/Api'

export const UniversalApi = {
  async get() {
    return await instance.get<{}>('todos/')
  },
}
