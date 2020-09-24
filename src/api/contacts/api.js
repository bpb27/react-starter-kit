import { API_URL } from 'constants';
import { request } from 'utils/request';

export default class ContactsAPI {
  constructor () {
    const base = `${API_URL}/contacts`;
    this.base = base;
    this.byId = id => `${base}/${id}`;
  }

  create (params) {
    return request({ method: 'POST', params, route: this.base });
  }

  delete (id) {
    return request({ method: 'DELETE', route: this.byId(id) });
  }

  findAll () {
    return request({ method: 'GET', route: this.base });
  }

  findOne (id) {
    return request({ method: 'GET', route: this.byId(id) });
  }

  update (id, params) {
    return request({ method: 'PUT', params, route: this.byId(id) });
  }
}
