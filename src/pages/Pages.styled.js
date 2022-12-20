import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LayoutLoggedBox = styled.div`
  display: flex;
  align-items: center;
`;

const LayoutBox = styled.div`
  display: flex;
`;

const LayoutMainBox = styled.div`
  width: 50%;
`;

const LayoutList = styled.ul`
  list-style: none;
  display: flex;
`;

const LayoutItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

const LayoutNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #23fe68;

  &.active {
    text-decoration: underline;
    color: blue;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #23fe68;
  }
`;

export const PagesToptext = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  text-shadow: blue 1px 1px 1px, blue 2px 2px 1px;
`;

export {
  LayoutLoggedBox,
  LayoutBox,
  LayoutMainBox,
  LayoutList,
  LayoutItem,
  LayoutNavLink,
};
