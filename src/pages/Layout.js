import { UserMenu } from 'components/Auth/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { tokenInfo } from 'redux/authorization/selectors';
import {
  LayoutLoggedBox,
  LayoutBox,
  LayoutMainBox,
  LayoutList,
  LayoutItem,
  LayoutNavLink,
} from './Pages.styled';

export const Layout = () => {
  const token = useSelector(tokenInfo);

  return (
    <LayoutBox>
      <LayoutMainBox>
        {token ? (
          <LayoutLoggedBox>
            <LayoutList>
              <LayoutItem>
                <LayoutNavLink to="/addcontacts">Add contact</LayoutNavLink>
              </LayoutItem>
              <LayoutItem>
                <LayoutNavLink to="/contacts">Phonebook</LayoutNavLink>
              </LayoutItem>
            </LayoutList>
            <UserMenu />
          </LayoutLoggedBox>
        ) : (
          <LayoutList>
            <LayoutItem>
              <LayoutNavLink to="/">Log in</LayoutNavLink>
            </LayoutItem>
            <LayoutItem>
              <LayoutNavLink to="/signup">Sign up</LayoutNavLink>
            </LayoutItem>
          </LayoutList>
        )}
        <Outlet />
      </LayoutMainBox>
    </LayoutBox>
  );
};
