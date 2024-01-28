import useIsLoginContext from '@/lib/hooks/useIsLoginContext';
import { createContext } from 'react';

interface IUserContextProviderProps {
  children: JSX.Element[];
}

// eslint-disable-next-line import/no-unused-modules
export const UserContext = createContext({} as ReturnType<typeof useIsLoginContext>);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  return <UserContext.Provider value={useIsLoginContext()}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line import/no-unused-modules
export default UserContextProvider;
