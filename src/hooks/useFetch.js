import { useState, useEffect } from "react";

//4- custom hook
export const useFetch = (url) => {
  //5- Refatorando post
  const [data, setData] = useState(null); // Armazena os dados da requisição GET
  const [config, setConfig] = useState(null); // Configuração da requisição (headers, method, etc)
  const [method, setMethod] = useState(null); // Método HTTP (POST)
  const [callFetch, setCallFetch] = useState(false); // Flag para forçar novo fetch

  //6-loading
  const [loading, setLoading] = useState(false)

  //8- DELETE
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
    if(method === "DELETE"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        }
      });

      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(url);

      const json = await res.json();

      setData(json);

      setLoading(false)
    };

    fetchData();
  }, [url, callFetch]);

  //5-Refatorando post
  useEffect(() => {
    //useEffect sempre espera retornar uma função sincrona por tanto para usar async em use effect deve se usar outra função dentro de userEffect essa sim assincrona.
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      }
      if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`
    
        const res = await fetch(deleteUrl, config);
        const json = await res.json();
        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading };
};
