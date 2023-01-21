import { createContext } from 'react';

export interface User {
    name: string;
    email: string;
    password?: string;
}

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);