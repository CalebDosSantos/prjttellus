import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import CadastrarUsuarios from "./Cadastrarusuarios";
import PlanoAcao from "./Planoacao";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { CadastrarUsuarios }  path="/cadastrarusuarios" />
           <Route component = { PlanoAcao }  path="/planoacao" />
       </BrowserRouter>
   )
}

export default Routes;