import axios from "axios";


const URL = process.env.NEXT_PUBLIC_API_URL;


// 로그인
export const Login_api = (ids, password) => {
  const fullUrl = `${URL}/api/login`;

  return axios.post(fullUrl, {
    ids: ids,
    password: password,
  }, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer ${accessToken}`,
    },
  });
};



// 유저 목록
export const getUsers_api = (accessToken,word,page) => {
  
  const fullUrl = `${URL}/api/admin/users`;

  return axios.get(fullUrl, {
    params: {
      word: word,
      page: page,
    },
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`, // 필요한 경우 액세스 토큰을 추가
    },
  });
};



// 프로그램 =====================
export const getPrograms_api = (accessToken,word,page) => {
  const fullUrl = `${URL}/api/admin/programs`;

  return axios.get(fullUrl, {
    params: {
      word: word,
      page: page,
    },
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`, // 필요한 경우 액세스 토큰을 추가
    },
  });
};


// 프로그램삭제
export const deletePrograms_api = (accessToken,ids) => {
  const fullUrl = `${URL}/api/admin/programs`;

  return axios.delete(fullUrl, {
    data: {
      ids: ids,
    },
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`, // 필요한 경우 액세스 토큰을 추가
    },
  });
};


// 프로그램 수정시 상세불러오기
export const getProgramById_api = (accessToken, id) => {
  const fullUrl = `${URL}/api/admin/programs/${id}`;

  return axios.get(fullUrl, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accessToken}`, // 필요한 경우 액세스 토큰을 추가
    },
  });
};



// 프로그램 수정하기
export const updateProgramById_api = (accessToken, id, title, opened_at) => {
  const fullUrl = `${URL}/api/admin/programs/${id}`;

  return axios.patch(
    fullUrl,
    {
      title: title,
      opened_at: opened_at,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // 액세스 토큰을 헤더에 포함
      },
    }
  );
};


// 프로그램 추가하기
export const createProgram_api = (accessToken, title, opened_at) => {
  const fullUrl = `${URL}/api/admin/programs`;

  return axios.post(
    fullUrl,
    {
      title: title,
      opened_at: opened_at,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // 액세스 토큰을 헤더에 포함
      },
    }
  );
};
// ======================================================================================

// 인증 목록 불러오기
export const getCertifications_api = (accessToken, word, page) => {
  const fullUrl = `${URL}/api/admin/certifications`;

  return axios.get(fullUrl, {
    params: {
      word: word,
      page: page,
    },
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`, // 필요한 경우 액세스 토큰을 추가
    },
  });
};