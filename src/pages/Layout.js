import { Outlet } from 'react-router-dom';
import {
  LayoutBox,
  LayoutMainBox,
  LayoutList,
  LayoutItem,
  LayoutNavLink,
} from './Pages.styled';

export const Layout = () => {
  return (
    <LayoutBox>
      <LayoutMainBox>
        <LayoutList>
          <LayoutItem>
            <LayoutNavLink to="/" end>
              Add contact
            </LayoutNavLink>
          </LayoutItem>
          <LayoutItem>
            <LayoutNavLink to="/contacts">Phonebook</LayoutNavLink>
          </LayoutItem>
        </LayoutList>
        <Outlet />
      </LayoutMainBox>
    </LayoutBox>
  );
};
