import Cookies from 'js-cookie';
import { atomWithLocalStorage } from './utils';

const defaultLang = () => {
  const userLang = navigator.language || navigator.languages[0];
  const defaultLang = "pr-IR"
  return Cookies.get('lang') || localStorage.getItem('lang') || defaultLang;
};

const lang = atomWithLocalStorage('lang', defaultLang());

export default { lang };
