import "./App.css";
import { useState } from "react";

//import custom hook
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/produtos";

function App() {
  const [produtos, setProdutos] = useState([]);

  //custom hook
  const {data: items, httpConfig, loading} = useFetch(url); //recebendo os dados e renomendo para items
  
  const [name, setName] = useState("");
  const [preco, setPreco] = useState("");
  // Resgatando dados
  /*
  useEffect(() => {
    //resgatando dados apenas uma vez da API json server. (precisa iniciar a APi antes do projeto com: "npm run server"
    async function fetchData() {
      const res = await fetch(url); //pega resposta da URL usanod metodo GET como padrão
      const data = await res.json(); //adiquirindo os dados em formato json de res ignorando dados inuteis como status, headers, body etc;

      setProdutos(data); //define o useState de Produtos com os dados adquiridos da API
    }

    fetchData(); // executa a função asincrona fetchData apenas uma vez dentro do useEffect
  }, []); //array de dependencias vazio significa que só sera executado o useEffect uma vez.
      */
  //adicionar produtos
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product ={
      name,
      preco,
    };
    /*
      const res = await fetch(url, {
      method:"POST",
      headers:{
        "Content-Type":"Application/json",
      },
      body: JSON.stringify(product),
    })

    //carregamento dinamico

    const addedProducts = await res.json();

    setProdutos((prevProducts)=>[...prevProducts, addedProducts]);
  */

  //5-Refatorando POST
    httpConfig(product, "POST")

    //limpando os inputs
    setName("");
    setPreco("");
  };
  
 //8- DELETE
 const handleRemove = (id) =>{
  httpConfig(id, "DELETE");
 }
 
  return (
    <div className="App">
      <h1>Lista de produtos. </h1>
      {/*6-loading*/}
      {loading && <p>Carregando dados...</p>}
      {! loading && <ul>
        { items && items.map( //com items && items.map só sera preenchido quando houver items
          (
            produto // Mapeia cada "produto" no array "produtos"
          ) => (
            <li key={produto.id}>
              {" "}
              {/*Chave única para otimização do React (evita re-renders desnecessários)*/}
              {produto.name}: R$:{produto.preco}{" "}
              <button onClick={()=>handleRemove(produto.id) }>Excluir</button>
              {/*
              - Renderiza o nome do produto e seu preço.
              - "produto.name" e "produto.preco" são propriedades do objeto "produto".
              */}
            </li>
          )
        )}
      </ul>}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label >
            Preço:
            <input
              type="text"
              value={preco}
              name="preco"
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </label>
        
          {loading && <input type="submit" disabled value={"Aguarde"}/> }
          {! loading && <input type="submit" value={"Criar"}/>}
        </form>
      </div>
    </div>
  );
}

export default App;
