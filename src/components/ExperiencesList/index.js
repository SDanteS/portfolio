import React, { Component } from "react";
import Dior from "../../static/Dior.jpg";
import VentePrivee from "../../static/vp.png";
import Bnp from "../../static/bnp.png";
import PSA from "../../static/psa.jpg";

class index extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: 100,
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <Card
          title="Dior"
          subtitle="Developpeur Java"
          description="Migration de version d'ERP"
          image={Dior}
        />
        <Card
          title="Vente Privée"
          subtitle="Developpeur React NodeJS"
          description="Développement des outils interne de vente privée"
          image={VentePrivee}
        />
        <Card
          title="BNP Paribas"
          subtitle="Developpeur React NodeJS"
          description="Developpement d'un site from scratch"
          image={Bnp}
        />
        <Card
          title="Smart Services (PSA)"
          subtitle="Developpeur NodeJS"
          description="Developpement de service pour voitures connectés"
          image={PSA}
        />
      </div>
    );
  }
}

export default index;

const Card = ({ title, subtitle, description, footer, image }) => (
  <div className="card" style={{ width: 300, marginBottom: 30 }}>
    <div className="card-image">
      <img src={image} className="img-responsive" alt="" />
    </div>
    <div className="card-header">
      <div className="card-title h5">{title}</div>
      <div className="card-subtitle text-gray">{subtitle}</div>
    </div>
    <div className="card-body">{description}</div>
  </div>
);
