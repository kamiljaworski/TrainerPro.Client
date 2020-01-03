const TOKEN_KEY = 'TRAINER_PRO_API_USER_TOKEN';

const storage = window.localStorage || {
  getItem: () => undefined,
  setItem: () => undefined,
  removeItem: () => undefined
};

export const getUserToken = (): string => {
  const serializedToken = storage.getItem(TOKEN_KEY);
  return serializedToken ? JSON.parse(serializedToken) : null;
};

export const setUserToken = (token: string) => {
  storage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const removeUserToken = () => {
  storage.removeItem(TOKEN_KEY);
};
