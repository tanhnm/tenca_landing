import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled('footer')`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
  font-family: 'Roboto', sans-serif; /* Font mặc định */
`;

export const Title = styled('h4')`
  font-size: 22px;
  text-transform: capitalize;
  color: #f471b3;
  font-family: 'Roboto', sans-serif;
  font-weight: 700; /* Sử dụng font-bold */

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    font-size: 18px;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  font-family: 'Roboto', sans-serif;
  font-weight: 300; /* Sử dụng font-light */

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled('section')`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled('div')`
  display: flex;
  position: relative;
`;

export const Para = styled('div')`
  color: #18216d;
  font-size: 14px;
  width: 70%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300; /* Sử dụng font-light */
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;
  font-family: 'Roboto', sans-serif;
  font-weight: 400; /* Sử dụng font-regular */

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled('p')`
  color: #f471b3;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
  font-weight: 300; /* Sử dụng font-light */

  &:hover {
    border-bottom: 1px solid #b5c171;
    color: #b5c171;
  }
`;

export const Empty = styled('div')`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled('div')`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled('h4')`
  font-size: 22px;
  text-transform: capitalize;
  color: #f471b3;
  font-family: 'Roboto', sans-serif;
  font-weight: 700; /* Sử dụng font-bold */

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    font-size: 18px;
  }
`;

export const Label = styled('label')`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  display: block;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700; /* Sử dụng font-bold */

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled('div')`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
