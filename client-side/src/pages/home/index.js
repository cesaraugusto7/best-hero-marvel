import React from "react";
import bestHeroImg from "../../assets/logo.png";
import ButtonMenu from "../../components/buttonMenu/ButtonMenu";
import ButtonMenuUser from "../../components/buttonMenuUser/ButtonMenuUser";
import Grid from "@material-ui/core/Grid";

import "./style-home.css";

export default function Home() {
  return (
    <div className="page-home">
      <header className="header-menu">
        <div className="section-left-menu">
          <img src={bestHeroImg} alt="" className="logo-menu" />
        </div>
        <div className="section-right-menu">
          <h4 className="name-user">
            <b>Cesar Augusto</b>
          </h4>
          <ButtonMenuUser />
        </div>
      </header>
      <div className="body-content">
        <div className="options-home">
          <div className="section-left-option">
            <button className="btn-options opitions-hero">Heróis</button>
            <button className="btn-options opitions-comics">Quadrinhos</button>
            <ButtonMenu />
            {/*  <button className="btn-options opitions-favorite">
              Favoritos &nbsp;&nbsp; <FaRegStar size={15} color="#ffffff" />
            </button> */}
          </div>
          <div className="section-right-option">
            <input
              type="text"
              placeholder="Pesquise aqui"
              className="search-option"
            />
          </div>
        </div>
        <div className="list-info">
          <Grid container spacing={3}>

            
          </Grid>
        </div>
      </div>
    </div>
  );
}
