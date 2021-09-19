import instance from '../../../../../app/api/Api';

const RestAPI = {
  async get() {
    return await instance.get<{}>('todos/');
  }
};

export default RestAPI;
