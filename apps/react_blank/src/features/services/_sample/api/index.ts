import { instance } from '../../../../app/api/axios'

export const RestAPI = {
  async get(payload: any) {
    return await instance.get<{}>('todos/')
  },
}
