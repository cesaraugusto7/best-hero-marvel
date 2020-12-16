import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style-register.css";
import bestHeroImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [whatsapp, setWhatsapp] = useState("");
  const [hero, setHero] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  /* Função que cadastra usuario */
  async function registerUser(e) {
    e.preventDefault();
    var data = {
      name: name,
      birthday: birthday,
      phone: whatsapp,
      best_hero: hero,
      email: email,
      password: password,
    };
    try {
      const response = await api.apiHero.post("user", data);
      console.log(response);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="page-register">
      <div className="card-register">
        <div className="section-logo-register">
          <img src={bestHeroImg} alt="" className="logo-register" />
        </div>
        <form onSubmit={registerUser}>
          <div className="section-form-register">
            <div className="form-group-register">
              <label htmlFor="">Nome *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group-register">
              <label htmlFor="">Data de Nascimento *</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="form-group-register">
              <label htmlFor="">WhatsApp *</label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <div className="form-group-register">
              <label htmlFor="">Herói favorito da Marvel *</label>
              <input
                type="text"
                value={hero}
                onChange={(e) => setHero(e.target.value)}
              />
            </div>
            <div className="form-group-register">
              <label htmlFor="">E-mail *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group-register">
              <label htmlFor="">Password *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group-register">
              <button type="submit" className="btn">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
