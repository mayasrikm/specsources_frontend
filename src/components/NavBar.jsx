import styled from 'styled-components';
import logo from './image1.png';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    npm 
`;

const NavBar = () => {
    return (
        <Nav>
            <div><a href="https://www.columbiaspectator.com/">
                <img src={logo} alt="spec logo" width="305px" height="67px" style={{paddingTop: '14px', paddingLeft: '11px'}} />
              </a></div>
            <h1>Spec's Sources</h1>
        </Nav>
    )
};

export default NavBar;