import axios from 'axios'

const bearerToken = import.meta.env.VITE_TMDB_V4_BEARER;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${bearerToken}`
  },
});


export const getApiData = async (value,page=1) => {
  const response = await api.get(`/search/movie?query=${value}&page=${page}`, {
  });
  console.log(response.data);
  return response.status ===200 ? response.data.results : [];
};

export const getApiData2 = async (value,page=1) => {
  const response = await api.get(`/search/movie?query=${value}&page=${page}`, {
  });
  console.log('data2: ',response.data);
  return response.status ===200 ? response.data.results : [];
};

export const getIndData = async(id)=>{
    const responses = await api.get(`/movie/${id}`);
    console.log(responses.data)
    return responses.status ===200 ? responses.data : null;
}

export const popShowData = async(value,page=1)=>{
    const response = await api.get(`/search/tv?query=${value}&page=${page}`)
    console.log(response.data)
    return response.status == 200 ? response.data.results : [];
}
