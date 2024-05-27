import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import TravelFormGenerator from "./pages/TravelFormGenerator";
import PageNotFound from "./pages/PageNotFound";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="travelformgenerator" element={<TravelFormGenerator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

/* 

Faut continuer le formulaire et rajouter les actions
Je me suis arreté le 24/01/2024 en galerant a essayer de mettre un overlay texture devant le TRAVEL PLAN FORM pour faire
une sorte de panneau routier australien, mais ça ne marche pas, j'arrête pour le moment
La suite sera de continuer à dispatch pour udpate le state avec tous les élements restant
Feuille de route:
- Définir définitivement ce qui sera sur le form
- Les implémenter dans le state
- Faire tous les dispatch
- Ensuite je réflechis sur la mise en forme de l'app et de l'affichage du pdf
  - sur le stylisme css utilisé
  - le 

- 🟡Ajouter un header et navbar
- 🟡Routing et linking

Un truc cool à implementer serait de choisir le style d'impression:
- un style assez stylisé télégramme avec une police d'écriture machien a écrire, avec logo
- un style très stylisé graphique randonné, semblable à l'app avec logo etc
- un style simpliste économie d'encre, toujours avec logo

*/