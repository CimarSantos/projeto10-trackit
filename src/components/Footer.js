import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/* import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../react-circular-progressbar/AnimatedProgressProvider";
import ChangingProgressProvider from "../react-circular-progressbar/ChangingProgressProvider";

import RadialSeparators from "../react-circular-progressbar/RadialSeparators"; */

const percentage = 69;

const Footer = () => {
  return (
    <>
      <Barra className="flex">
        <Link to={`/habito`}>
          <h3>Hábitos</h3>
        </Link>
        <MenuHoje className="flex">
          <Link to={`/hoje`}>
            <CircularProgressbar
              value={percentage}
              text={`Hoje`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52b6ff",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </Link>
        </MenuHoje>
        <Link to={``}>
          <h3>Histórico</h3>
        </Link>
      </Barra>
    </>
  );
};

export default Footer;

const Barra = styled.div`
  width: 100%;
  height: 70px;
  justify-content: space-around;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  position: fixed;
  bottom: 0;

  h3 {
    color: #52b6ff;
    font-size: 18px;
    font-weight: 400;
  }
`;

const MenuHoje = styled.div`
  width: 91px;
  height: 91px;
  background-color: #52b6ff;
  border-radius: 50%;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  h2 {
    color: white;
    font-size: 18px;
    font-weight: 400;
  }
`;
