/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const Container = styled.div`
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 24px;
`;

function HeaderComponent(): React.ReactElement {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Container>
              <h1>Wilders Book</h1>
            </Container>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
