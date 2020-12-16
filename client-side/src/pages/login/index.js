import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style-login.css";
import bestHeroImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  /* Função que efetua login */
  async function logar(e) {
    e.preventDefault();
    var data = {
      email: email,
      password: password,
    };
    try {
      const response = await api.apiHero.post("auth", data);
      console.log(response);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="page-login">
      <div className="card-login">
        <div className="section-logo-login">
          <img src={bestHeroImg} alt="" className="logo-login" />
        </div>
        <div className="section-form-login">
          <form onSubmit={logar}>
            <div className="form-group-login">
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group-login">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group-login">
              <button type="submit" className="btn">
                Logar
              </button>
            </div>
          </form>
        </div>
        <div className="sectio-footer-login">
          <Link className="link-login" to="/register">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
