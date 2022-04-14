import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cadastro from './cadastro.png';
import { Link } from 'react-router-dom';

function CadastrarUsuarios() {
const [nome , setNome] = useState('');
const [nascimento , setNascimento] = useState('');
const [cpf , setCpf] = useState('');
const [rg , setRg] = useState('');
const [email , setEmail] = useState('');
const [telefone , setTelefone] = useState('');
const [sexo , setSexo] = useState('');
const [cep , setCep] = useState('');
const [logradouro , setLogradouro] = useState('');
const [bairro , setBairro] = useState('');
const [complemento , setComplemento] = useState('');
const [cidade , setCidade] = useState('');
const [uf , setUf] = useState('');

// function to update state of name with 
// value enter by user in form
const handleChange =(e)=>{
setNome(e.target.value);
}
// function to update state of age with value 
// enter by user in form
const handleNascimentoChange =(e)=>{
setNascimento(e.target.value);
}
// function to update state of age with value 
// enter by user in form
const handleCpfChange =(e)=>{
setCpf(e.target.value);
}
// function to update state of age with value 
// enter by user in form
const handleRgChange =(e)=>{
setRg(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleTelefoneChange =(e)=>{
setTelefone(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleEmailChange =(e)=>{
setEmail(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleCepChange =(e)=>{
setCep(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleLogradouroChange =(e)=>{
setLogradouro(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleBairroChange =(e)=>{
setBairro(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleComplementoChange =(e)=>{
setComplemento(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleCidadeChange =(e)=>{
setCidade(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleUfChange =(e)=>{
setUf(e.target.value);
}
// function to update state of email with value
// enter by user in form
const handleSexoChange =(e)=>{
setSexo(e.target.value);
}
// below function will be called when user 
// click on submit button .
const handleSubmit=(e)=>{
  e.preventDefault();
}
return (
  <div className="App">
    <div className="App-nav">
      <ul className="menu">
        <b>Tellus SA</b>
        <Link to="/planoacao">Plano de ação</Link>
        <Link to="/cadastrarusuarios">Cadastrar usuários</Link>
      </ul>
    </div>
    <header className="App-header">
      <form onSubmit={(e) => {handleSubmit(e)}}>
        {/*Quando o usuario submeter o formulario, a função handleSubmit() será chamada .*/}

        
        <h1> <div className="row"><div class ="img"><img src={Cadastro}></img></div> <div class ="cadastro">Cadastrar usuário </div></div></h1>
        <div className="row">
          <div className="col-1">
            <label>Nome Completo</label><br/>
            <input type="text" style={{width: "100%"}}value={nome} placeholder="Nome completo" required onChange={(e) => {handleChange(e)}} />
            { /*Quando o usuario escrever no nome, a funcao, handleChange() será chamada*/}
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Nascimento</label><br/>
            <input type="date" value={nascimento} placeholder="Nascimento" required onChange={(e) => {handleNascimentoChange(e)}} />
            { /*Quando o usuario entrar com o nascimento, a funcao, handleNascimentoChange() será chamada*/}
          </div>
          <div className="col-3">
            <label>CPF</label><br/>
            <input type="number" value={cpf} placeholder="CPF" required onChange={(e) => {handleCpfChange(e)}} />
            { /*Quando o usuario entrar com CPF, a funcao, handleCpfChange() será chamada*/}
          </div>
          <div className="col-3">
            <label>RG</label><br/>
              <input type="number" value={rg} placeholder="RG" required onChange={(e) => {handleRgChange(e)}} />
              { /*Quando o usuario entrar com o RG, a funcao, handleRgChange() será chamada*/}
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label>E-mail</label><br/>
            <input type="email" value={email} placeholder="Email" required onChange={(e) => {handleEmailChange(e)}} />
            { /*Quando o usuario entrar com E-mail, a funcao, handleEmailChange() será chamada*/}
          </div>
          <div className="col-2">
            <label>Telefone</label><br/>
            <input type="tel" value={telefone} placeholder="Telefone" required onChange={(e) => {handleTelefoneChange(e)}} />
            { /*Quando o usuario entrar com o telefone, a funcao, handleTelefoneChange() será chamada*/}
          </div>
        </div>
        <div className="row">
          <div className="">
            <label for="sexo">Sexo</label><br/>
            <select id="sexo" value={sexo} placeholder="Sexo" required onChange={(e) => {handleSexoChange(e)}} >
              <option value="">Sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="NI">Prefiro não identificar</option>
            </select>


            {/* /<input type="text" value={sexo} placeholder="Sexo" required onChange={(e) => {handleSexoChange(e)}} /> */}
            { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-2">
            <label>CEP</label><br/>
            <input type="number" value={cep} placeholder="CEP" required onChange={(e) => {handleCepChange(e)}} />
            { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
          </div>
          <div className="col-2">
            <label>Logradouro</label><br/>
            <input type="text" value={logradouro} placeholder="Logradouro" required onChange={(e) => {handleLogradouroChange(e)}} />
            { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label>Bairro</label><br/>
            <input type="text" value={bairro} placeholder="Bairro" required onChange={(e) => {handleBairroChange(e)}} />
            { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
          </div>
          <div className="col-2">
            <label> Complemento</label><br/>
            <input type="text" value={complemento} placeholder="Complemento" required onChange={(e) => {handleComplementoChange(e)}} />
            { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label>Cidade</label><br/>
            <input type="text" value={cidade} placeholder="Cidade" required onChange={(e) => {handleCidadeChange(e)}} />
            { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
          </div>
          <div className="col-2">
            <div className="col-uf">
              <label for="UF">UF</label><br/>
              {/* /<input list="UF" value={uf} placeholder="UF" required onChange={(e) => {handleUfChange(e)}} /> */}
              <select id="UF" value={uf} placeholder="UF" required onChange={(e) => {handleUfChange(e)}}  >
                <option value="">UF</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              </div>  
              { /*Quando o usuario entrar com o telefone, a funcao, handleSexo() será chamada*/}
            </div>
        </div>

        <br/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "right"}}>
          <button type="submit" required onChange={(e) => {handleSubmit(e)}}>Cadastrar</button>
        </div>

      </form>
    </header>
  </div>
  );
  }

export default CadastrarUsuarios;
