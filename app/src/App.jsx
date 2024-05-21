import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import SearchResult from './components/SearchResult'
export const BASE_URL = "http://localhost:9000"

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  

  useEffect(()=>{
    const fetchFoodData = async () => {
      setLoading(true)
      try{
        const response = await fetch(BASE_URL)
  
      const json = await response.json()
      setData(json)
      setLoading(false)
      } catch (error){
        setError('Unable to Fetch data')
      }
      
    }
    fetchFoodData()
  },[])
  console.log(data)

  const temp = [
    
      {
          "name": "Boilded Egg",
          "price": 10,
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          "image": "/images/egg.png",
          "type": "breakfast"
      },
     
  ]
  
  if(error) return <div> {error}</div>
  if(loading) return <div> loading.......</div>



  return (
  <Container>
    <TopContainer>
      <div className='logo'>
        <img src="./images/FoodyZone.png" alt="logo" />
      </div>
      <div className='search'>
        <input type="text" placeholder='Search food'/>
      </div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
    <SearchResult data={data}/>
  </Container>
  )
}

export default App

const Container = styled.div`
background-color:#323334;
max-width: 1200px;
margin: 0 auto;

`;
 const TopContainer = styled.section`
 min-height: 140px;
 display: flex;
 justify-content: space-between;
 padding: 16px;

 .search{
  input{
    background-color: transparent;
  border: 1px solid red ;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  }
 }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
`
const Button = styled.button`
  background: #ff4343;
  border-radius: 2px ;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  
`

