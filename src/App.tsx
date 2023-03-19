import { useEffect,useState } from "react";
import { Marca } from "./components/marcas";
import {Genero} from "./components/genero";
import { Cates } from "./components/categorias";
import { Coutry } from "./components/paises";
function App() {
  

  return (
   <section >
    <h1 className="titulo">Ecomerce</h1>
    <Coutry/>
   <section className="divisor">
      <div  className="caja"><Genero/></div>
      <div className="centro"><Marca/></div>
      <div className="caja"><Cates/></div>
    </section>
    </section>
  )
  
}

export default App
