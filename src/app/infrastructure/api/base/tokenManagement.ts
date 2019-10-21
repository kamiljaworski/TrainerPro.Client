import {ITokenDto} from "../../../models/token/ITokenDto";

const TOKEN_KEY = 'WARPSOLUTIONS_API_USER_TOKEN';

const storage = window.localStorage || {
  getItem: () => undefined,
  setItem: () => undefined,
  removeItem: () => undefined
};

export const getUserToken = (): ITokenDto => {
  const serializedToken = storage.getItem(TOKEN_KEY);
  return serializedToken ? JSON.parse(serializedToken) : null;
};

export const setUserToken = (token: ITokenDto) => {
  storage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const removeUserToken = () => {
  storage.removeItem(TOKEN_KEY);
};
