import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/planoacao">Plano de Ação</Link>
          </li>
          <li>
            <Link to="/cadastrarusuario">Cadastrar usuários</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;