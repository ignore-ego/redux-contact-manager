import { usersClient } from '../../../api/users';

export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};

// GET -> /users/idsdafsafs
export const readUser = (userId) => {
  return async () => {
    const { data } = await usersClient.get(`/users/${userId}`);

    return data;
  };
};

// POST -> /users
export const createUser = (user) => {
  return async () => {
    const { data } = await usersClient.post('/users', user);

    return data;
  };
};
