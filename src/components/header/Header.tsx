import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import NavItem from './NavItem';
import { useGetUserQuery } from '@/queries/user.query';

const Header = () => {
  const { isLogin } = useContext(UserContext);
  const { data } = useGetUserQuery();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          CCI
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {Object.keys(routerMeta).map((componentKey: string) => {
            const menu: IRouterMeta = routerMeta[componentKey];

            if (
              (menu.isShow && menu.isCommon) ||
              (menu.isShow && menu.isAuth && isLogin) ||
              (menu.isShow && !menu.isAuth && !isLogin)
            ) {
              return <NavItem key={menu.path} menu={menu} />;
            }
          })}
          {/* {JSON.stringify(data)} */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
