import styled from 'styled-components';

export const FormBox = styled.form`
  text-align: center;
`;

export const LabelBox = styled.label`
  font-size: 20px;
  color: #59cf5b;
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px 1px black, 2px 2px 1px black;
`;

export const MainInput = styled.input`
  width: 400px;
  border-radius: 25px;
  border: 1px solid darkgreen;
  height: 35px;
  margin-bottom: 10px;
  margin-top: 10px;
  outline-color: #59cf5b;
  padding-left: 15px;
  color: black;
`;

export const AddBTN = styled.button`
  padding: 12px 30px;
  border-radius: 25px;
  border: 1px solid darkgreen;
  color: #0e3d04;
  background-color: #d7d1d1;
  :hover {
    border: 1px solid #d7d1d1;
    color: white;
    background-color: #59cf5b;
  }
`;
