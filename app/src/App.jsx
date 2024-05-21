import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import SearchResult from './components/SearchResult'
export const BASE_URL = "http://localhost:9000"

function App() {

  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  

  useEffect(()=>{
    const fetchFoodData = async () => {
      setLoading(true)
      try{
        const response = await fetch(BASE_URL)
  
      const json = await response.json()
      setData(json)
      setFilteredData(json)
      setLoading(false)
      } catch (error){
        setError('Unable to Fetch data')
      }
      
    }
    fetchFoodData()
  },[])
  console.log(data)
  
  if(error) return <div> {error}</div>
  if(loading) return <div> loading.......</div>

  // FUNCTION FOR SEARCH FUNCTINALITY
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue)

    if(searchValue === ''){
      setFilteredData(null)

    }
      

    const filter = data.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredData(filter)
  }






  return (
  <>
  <Container>
    <TopContainer>
      <div className='logo'>
        <img src="./images/FoodyZone.png" alt="logo" />
      </div>
      <div className='search'>
        <input onChange={searchFood} type="text" placeholder='Search food'/>
      </div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
  </Container>
    <SearchResult data={filteredData}/>
  </>
  )
}

export default App

export const Container = styled.div`
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
export const Button = styled.button`
  background: #ff4343;
  border-radius: 2px ;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #ba2121;
  }
  
`

