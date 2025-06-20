import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzZmMTc4MGQxYzE0YWM1ODM2NmZmMjZjYjNjNjUwZiIsIm5iZiI6MTc1MDA1MjM5Mi41NjA5OTk5LCJzdWIiOiI2ODRmYWUyOGQ3YWU1ZjI5MDcxZWM5N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-faLJoDYYf1mD6G0lw8wwhtJ-1sVXjsB1aUk-VOGJdU'
  },
});

export const getApiData = async (value,page=1) => {
  const response = await api.get(`/search/movie?query=${value}&page=${page}`, {
  });
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
