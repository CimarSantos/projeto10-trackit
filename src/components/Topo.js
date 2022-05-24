import styled from "styled-components";
import logoTrakit from "../img/TrackIt.png";
import Bob from "../img/Bob.png";

const Topo = () => {
  return (
    <Barra className="flex">
      <img src={logoTrakit} alt="logoTrakit" />
      <img src={Bob} alt="Bob" />
    </Barra>
  );
};

export default Topo;

const Barra = styled.div`
  height: 70px;
  background-color: #126ba5;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;
