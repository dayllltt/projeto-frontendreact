import React, { useState, useEffect } from "react";
import appStyle from "./appStyle";
import "./styles.css";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import ProductCard from "./Components/ProductList/ProductCard/ProductCard";
import Items from "./Components/ShoppingCart/Items/Items";
import Cart from "./Components/ShoppingCart/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    valorMinimo: "",
    valorMaximo: "",
    busca: "",
    ordenacao: "crescente"
  });

  useEffect(() => {
    // Carrega os itens do carrinho do localStorage ao iniciar
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);

    // Atualiza o localStorage com os itens do carrinho
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);

    // Atualiza o localStorage com os itens do carrinho
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    // Limpa o carrinho
    setCartItems([]);

    // Limpa o localStorage
    localStorage.removeItem("cartItems");
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const products = [
    {
      title: "Produto 1",
      description: "Foguete de entrada",
      price: 999
    },
    {
      title: "Produto 2",
      description: "Foguete intermediario",
      price: 1999
    },
    {
      title: "Produto 3",
      description: "Foguete top",
      price: 9999
    }
  ];

  // Aplica os filtros à lista de produtos
  const filteredProducts = products
    .filter((product) => {
      // Filtra pelo valor mínimo
      if (
        filters.valorMinimo !== "" &&
        Number(product.price) < filters.valorMinimo
      ) {
        return false;
      }
      // Filtra pelo valor máximo
      if (
        filters.valorMaximo !== "" &&
        Number(product.price) > filters.valorMaximo
      ) {
        return false;
      }
      // Filtra pela busca por nome
      if (
        filters.busca !== "" &&
        !product.title.toLowerCase().includes(filters.busca.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Ordena a lista com base na ordenação selecionada
      if (filters.ordenacao === "crescente") {
        return a.price - b.price;
      } else if (filters.ordenacao === "decrescente") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div style={appStyle.container}>
      <Filters onFiltersChange={handleFiltersChange} />
      <Home />
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          onAddToCart={handleAddToCart}
        />
      ))}
      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
      <Items />
    </div>
  );
}

export default App;
