import React from "react";
import Logo from "../Logo";
import dior from "../../static/Dior_Logo.svg";
import ventePrivee from "../../static/Vente_Privée_Logo.svg";
import psa from "../../static/Groupe_PSA_logo.svg";
import bnp from "../../static/BNP_Paribas_2009.svg";

const Reasssurance = () => (
  <section style={{ marginTop: 40 }}>
    <h4 className="text-center">ils m'ont fait confiance</h4>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }}
    >
      <Logo logo={dior} />
      <Logo logo={ventePrivee} />
      <Logo logo={psa} />
      <Logo logo={bnp} />
    </div>
  </section>
);

export default Reasssurance;
