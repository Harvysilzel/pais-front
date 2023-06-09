import { useState, useEffect } from "react";

export const Cates = () => {
  const [categorias , setCategorias] = useState<any[]>([]);

  const API_URL = "http://localhost:5000";
  const ENDPOINT = "categorias";

  const getCategorias = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setCategorias(data);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <div>
      <ul>
        {categorias.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
