import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../img/LogoCentral.png";
import { Link, useNavigate } from "react-router-dom";

const URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();

    const request = axios.post(URL, {
      email: email,
      name: name,
      image: image,
      password: password,
    });
    request
      .then((response) => {
        alert(
          `Seu cadastro foi feito com sucesso! Você será direcionado para fazer o Login!`
        );
        navigate("/");
      })
      .catch(erroStatus);

    function erroStatus(response) {
      alert(
        `Ocorreu um erro! Verifique se todos campos foram preenchidos correntamente ou tente com outro e-mail.`
      );
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
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="name"
              placeholder="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="url"
              placeholder="foto"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="flex">
            <button type="submit" onClick={SignIn}>
              Cadastrar
            </button>
          </div>
        </form>
      </Container>
      <Link to={`/`}>
        <Cadastrolink className="flex">
          <p>Já tem uma conta? Faça login!</p>
        </Cadastrolink>
      </Link>
    </>
  );
};

export default Cadastro;

const Boxtopo = styled.div`
  img {
    width: 180px;
    margin: 50px 0;
  }
`;

const Container = styled.div`
  padding: 3% 0;
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
