import styled from 'styled-components'

const About = () => {
  const StyledComp = styled.div`
    display:flex;
    background-color: blue;
    width: 60%;
    height: 500px;
    margin: auto;
    `
  const StyledCompleft = styled.div`
    display:flex;
    background-color: pink;
    width: 50%;
    height: auto;
    flex-wrap: wrap;
    & img {
        width: 100%;
    }
    `
  const StyledCompright = styled.div`
    display:flex;
    background-color: white;
    color: black;
    padding: 40px;
    width: 50%;
    height: auto;
    flex-wrap: wrap;
  
    & h1{
        color: white;
        mix-blend-mode: difference;
        font-size: 70px;
        margin-left: -170px;
    }
    `
  return (
    <StyledComp>
      <StyledCompleft>
        <img src='https://images.unsplash.com/photo-1687011909393-195e148d9428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80' />
      </StyledCompleft>
      <StyledCompright>
        <h1>About US</h1>
        <p>When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.</p>
        <p>In addition to Lorem Ipsum text, you can generate random avatars, names, surnames, full names and usernames to fill the fields about users randomly.
        </p>
      </StyledCompright>
    </StyledComp>
  )
}

export default About
