
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
// Navbar wrapper
export const Nav = styled.nav`
  background: linear-gradient(#0f091d 20%,#732525);
  height: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
`;

// Navbar Title "Gamma" styling
export const NavTitle = styled.div`
  color: white;
  margin-top: 10px;
  font-size: xxx-large;
`;

// Wrapper for the links
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

// Styling for the navbar links
export const NavLink = styled(Link)`
  color: #C5C8D5; 
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
`;

  