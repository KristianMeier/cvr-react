import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../styles/Button'

const Side = () => {
  const { routeParams } = useParams()
  return (
    <Wrapper>
      <section>
        <h1>{routeParams}</h1>
        <h2>Site Not made yet</h2>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          dolorum quas nostrum tenetur recusandae temporibus?
        </h5>
        <Button title='Landing Page' link='/' />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  section {
    margin: 3rem;
    box-shadow: 0 0 7px 0;
    padding: 3rem;
    border-radius: 0.5rem;
    background-color: White;
  }

  h1 {
    font-size: 4rem;
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    margin-top: 0.75rem;
    cursor: pointer;
  }

  h5 {
    margin-top: 0.25rem;
  }
`

export default Side
