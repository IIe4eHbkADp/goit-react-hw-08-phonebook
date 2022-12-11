import styled from 'styled-components';

export const ContactMainList = styled.ul`
  margin-top: 20px;
`;

export const ContactStyledItem = styled.li`
  align-items: center;
  color: #59cf5b;
  font-size: 20px;
  font-style: italic;
  text-shadow: 1px 1px 1px black, 1px 1px 1px black;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactDeleteBTN = styled.button`
  padding: 2px 20px;
  border-radius: 25px;
  border: 1px solid darkgreen;
  color: #0e3d04;
  background-color: #d7d1d1;
  margin-left: 10px;
  :hover {
    border: 1px solid #d7d1d1;
    color: white;
    background-color: darkgreen;
  }
`;
