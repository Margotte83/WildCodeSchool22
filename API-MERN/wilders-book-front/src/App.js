import React, { useState, useEffect } from "react";
import axios from "axios";

import Wilder from "./components/Wilder";
import AddWilder from "./components/AddWilder";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//Style-component renvoie une fonction qui va créer un style
const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 200px;
  justify-content: center;
`;

function App() {
  const [wilders, setWilders] = useState([]); //rendre le state sémantique.
  //wilders est le state et setWilders est la fonction qui va modifier le state

  console.log(wilders);
  //useEffect s'applique au premier render de la page
  //fetchedData est une fonction qui va être exécutée au premier render
  useEffect(() => {
    //fonction qui va être exécutée au premier render
    const fetchWilders = async () => {
      // fonction qui va récupérer les données
      try {
        //axios est une fonction qui permet de faire des requêtes HTTP
        const result = await axios.get("http://localhost:5000/api/wilder/read");
        // const result est un objet qui contient les données
        console.log(result);
        //setWilders permet de modifier le state de wilders avec les données récupérées dans result (result.data) (result.data est un tableau de wilders)
        setWilders(result.data.wilders);
      } catch (error) {
        console.log(error); //affiche l'erreur
      }
    };

    fetchWilders();
  }, [wilders]); //si on met un tableau vide, on ne fait pas de second appel à la fonction fetchWilders
  //si on met un tableau avec une valeur, on fait un appel à la fonction fetchWilders
  return (
    <div className="App">
      <HeaderComponent />
      <Container>
        <h2>WELCOME</h2>
        <h3>Click on the button to add a wilder</h3>
        <br></br>
        <AddWilder></AddWilder>
        <br></br>
        <br></br>
        <CardRow>
          {/*wilders.map permet de parcourir le tableau et d'afficher chaque wilder
           */}
          {wilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
          {/*Wilder est le composant qui va afficher les wilders
          /* key est une propriété qui permet de générer un identifiant unique pour chaque wilder
          /* wilder est le wilder qui va être affiché
          /* ...wilder est une syntaxe qui permet d'afficher toutes les propriétés du wilder
          */}
        </CardRow>
      </Container>
      <footer>
        <Container>
          <FooterComponent></FooterComponent>
        </Container>
      </footer>
    </div>
  );
}

export default App;
