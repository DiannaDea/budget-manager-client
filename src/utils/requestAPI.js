import axios from 'axios';


export default (requestParams) => {
  const {
    url,
    method,
    data,
    params,
    port,
  } = requestParams;

  const p = port || '5000';

  return axios({
    method,
    url: `http://35.234.97.137:${p}${url}`,
    ...({ data } || null),
    ...({ params } || null),
  });
};
