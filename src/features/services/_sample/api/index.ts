// import { instance } from '@axios'

import { instance } from '../../../../app/api/axios'

const RestAPI = {
  async get(payload: any) {
    return await instance.get<{}>('todos/')
  },
}

export default RestAPI
