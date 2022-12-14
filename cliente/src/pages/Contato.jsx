import styled from 'styled-components';
import conta from '../components/images/conta.png';
import toters from '../components/images/toters.png';
import './syles/Contato.css';
import React from 'react';

export default function Contato() {
  return (
    <ContatosContainer>
      <h1>Nossa página de Contato</h1>
      <div className='contato_container'>
        <div className='sobre-nos'>
          <br />
          <div>
            <h2>fale com nosco</h2>
            <br />
          </div>
          <div className='imagem-contato'>
            <br />
            <div>
              <ul>
                <li>
                  <a
                    href='https://www.linkedin.com/in/ankys-serrano-9896071b9'
                    target='_blank'
                  >
                    <img className='icon' src={conta}></img>
                    <span>Ankys-Serrano</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://linkedin.com/in/humbertocolmenares'
                    target='_blank'
                  >
                    <img className='icon' src={conta}></img>
                    <span>Humberto-Colmenares</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/marisa-basilio/'
                    target='_blank'
                  >
                    <img className='icon' src={conta}></img>
                    <span>Marisa-Basilio</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/solangelis-hernandez-gonzalez-098164213/'
                    target='_blank'
                  >
                    <img className='icon' src={conta}></img>
                    <span>Solangelis-Gonzales</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/philistin-destin-tabitha-039b65241/'
                    target='_blank'
                  >
                    <img className='icon' src={conta}></img>
                    <span>Philistin-Tabitha</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='nos'>
          <img className='imagem-sobrenos' src={toters} alt='Imagem'></img>
        </div>
      </div>
    </ContatosContainer>
  );
}

const ContatosContainer = styled.section`
background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;
