import './App.css'
import styled from 'styled-components'

function App() {

  return (
  <MainContainer>
    <TopContainer>
      <div className='logo'>
        <img src="./images/FoodyZone.png" alt="logo" />
      </div>
      <div className='search'>
        <input type="search" placeholder='Search food'/>
      </div>
    </TopContainer>
  </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
background-color:#323334

`;
 const TopContainer = styled.section`
`;
