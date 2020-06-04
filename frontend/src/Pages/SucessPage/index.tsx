import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";
const Sucess = () => {
  return (
    <div id="page-sucess">
      <div className="container">
        <Link to="/" className="linksucess">
          <FiCheckCircle color={"#2fb86e"} size={62} />

          <p>Cadastro concluído!</p>
        </Link>
      </div>
    </div>
  );
};
export default Sucess;
