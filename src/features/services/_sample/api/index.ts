import instance from '../../../../app/api'

const RestAPI = {
  async get(payload: any) {
    return await instance.get<{}>('todos/')
  },
}

export default RestAPI
