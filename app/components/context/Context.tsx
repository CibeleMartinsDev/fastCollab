"use client"

import { Dispatch, ReactNode, SetStateAction, createContext,  useState } from 'react';

interface AuthContextType {
    cordToken: string | undefined;
    setCordToken: Dispatch<SetStateAction<string | undefined>>;
}

export const AuthContext = createContext<AuthContextType>({
    cordToken: '',
    setCordToken: ()=> {}
})

interface ContextProps {
    children: ReactNode;
    getToken: (token: string)=> void;
}

export default function Context({ children, getToken }: ContextProps){
    const [cordToken, setCordToken] = useState<string | undefined>();
    getToken(cordToken as string)
    return (
        <AuthContext.Provider value={{
            cordToken,
            setCordToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}