import routerMeta from '@/lib/routerMeta';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/contexts/UserContextProvider';
import { useContext } from 'react';

interface IProtectedRoute {
  children: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ children, path }: IProtectedRoute) => {
  const { isLogin } = useContext(UserContext);

  if (isLogin && path === routerMeta.LandingPage.path) {
    return <Navigate to={routerMeta.LandingPage.path} replace={true} />;
  }

  return children;
};
// eslint-disable-next-line import/no-unused-modules
export default ProtectedRoute;
