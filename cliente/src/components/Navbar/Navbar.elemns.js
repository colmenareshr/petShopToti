import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: #E0492B; 
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  padding-left: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  
  img{
    width:170px;
    height:170px;
  }

  `;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;


export const MenuItem = styled.li`
  height: 100%;
  

`;

export const MenuItemLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #F7F2E3;
  cursor: pointer;
  transition: 0.5s all ease;
  `;

  export const BuscadorContainer = styled.div`
    min-width: 350px;
    input {
      border-radius: 15px;
      padding: 5px 10px;
      border: none;
      outline: none;
    }
    
  `;










