import axios from 'axios';


export default (requestParams) => {
  const {
    url,
    method,
    data,
    params,
  } = requestParams;

  return axios({
    method,
    url: `http://35.234.97.137:5000${url}`,
    ...({ data } || null),
    ...({ params } || null),
  });
};
