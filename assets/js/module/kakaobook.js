const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'KakaoAK 536d611d8f02b800a89f04fee60518d0';

const api = async params =>{
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(API_URL+queryString, {
    headers: {Authorization: API_KEY}
  });
  return response.json();
}
export default api;