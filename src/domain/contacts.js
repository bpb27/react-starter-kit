import { API_URL } from './constants';
import { request } from './utils/request';

const contactsRoute = () => `${API_URL}/contacts`;

const contactRoute = id => `${contactsRoute()}/${id}`;

const create = ({ body }) => request({ body, method: 'POST', route: contactsRoute() });

const get = ({ id }) => request({ method: 'GET', route: contactRoute(id) });

const getAll = () => request({ method: 'GET', route: contactsRoute() });

const remove = ({ id }) => request({ method: 'DELETE', route: contactRoute(id) });

const update = ({ body, id }) => request({ body, method: 'PUT', route: contactRoute(id) });

export default {
  create,
  get,
  getAll,
  remove,
  update,
};
