import cookie from 'cookie';

export const getTokenFromCookies = () => {
  const token = cookie.parse(document.cookie.token);
  return token
};

export const getCookie = (name) => {
  const cookies = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('='));
  const cookie = cookies.find((cookie) => cookie[0] === name);
  return cookie ? decodeURIComponent(cookie[1]) : '';
}

export const verificaUsuarioLogado = () => {
  if (getCookie('token')) {
    return true;
  } else {
    return false;
  }
}