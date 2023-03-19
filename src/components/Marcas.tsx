import { useState, useEffect } from "react";

export const Marca = () => {
  const [marcas , setMarcas] = useState<any[]>([]);

  const API_URL = "http://localhost:5000";
  const ENDPOINT = "marcas";

  const getMarcas = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setMarcas(data);
  };

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <div>
      <ul>
        {marcas.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
