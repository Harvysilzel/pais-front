import { useState, useEffect } from "react";

export const Coutry = () => {
  const [pais , setPais] = useState<any[]>([]);

  const API_URL = "http://localhost:5000";
  const ENDPOINT = "paises";

  const getPais = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setPais(data);
  };

  useEffect(() => {
    getPais();
  }, []);

  return (
    <nav className="menu">
      
        {pais.map((item) => (
          <li key={item.id} className="boton">
            <a href="">{item.name}</a>
          </li>
        ))}
      
    </nav>
  );
};
