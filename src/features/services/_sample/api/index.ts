import instance from '../../../../app/api'

const RestAPI = {
  async get() {
    return await instance.get<{}>('todos/')
  },
}

export default RestAPI
