import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../img/LogoCentral.png";
import { Link, useNavigate } from "react-router-dom";

const Init = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password,
      }
    );
    request
      .then((response) => {
        console.log(request);
        navigate("/hoje");
      })
      .catch(erroLogin);

    function erroLogin() {
      alert(`Verifique seu nome e/ou senha e tente novamente`);
    }
  };
    return (
      <>
        <Boxtopo className="flex">
          <img src={Logo} alt="LogoCentral" />
        </Boxtopo>
        <Container className="flex">
          <form>
            <div>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <button type="submit" onClick={Login}>
                Entrar
              </button>
            </div>
          </form>
        </Container>
        <Cadastrolink className="flex">
          <Link to={`/cadastro`}>
            <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
        </Cadastrolink>
      </>
    );
};

export default Init;

const Boxtopo = styled.div`
  img {
    width: 180px;
    margin: 50px 0;
  }
`;

const Container = styled.div`
  padding: 5% 0;
  input,
  button {
    width: 303px;
    height: 45px;
    padding-left: 20px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    background: #52b6ff;
    color: #fff;

    &:hover {
      box-shadow: 0 0 5px #000;
      text-shadow: 0 0 5px #fff;
    }
  }
`;

const Cadastrolink = styled.div`
  p {
    color: #52b6ff;
    font-size: 14px;
    text-decoration: underline;
  }
`;
