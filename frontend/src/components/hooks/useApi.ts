import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001/users'
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        /*       return {
                  user: { id: 3, name: 'aaa', email: 'aaa@mail.com' }
              }; */
        const response = await api.post('/auth/authenticate', { token });
        return response.data;
    },
    signIn: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'desafiosharenergy', username: 'desafiosharenergy' },
            token: 'sh@r3n3rgy'
        };
        const response = await api.post('/auth/register', {
            email,
            password
        });
        console.log(response.data);
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
});