import React from "react";
import productStyle from "./productStyle"; // Importe o arquivo de estilos
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import produto from "./produto1.jpg"; // Importe a imagem

const ProductCard = ({ title, description, price, onAddToCart }) => {
  const handleAddToCart = () => {
    // Chama a função para adicionar ao carrinho
    onAddToCart({ title, description, price });
  };

  return (
    <div style={productStyle.container}>
      <img
        src={produto}
        alt="Produto"
        style={{
          ...productStyle.image,
          width: "100px", // Defina a largura desejada com a unidade "px"
          height: "100px" // Defina a altura desejada com a unidade "px"
        }}
      />
      <h2 style={productStyle.title}>{title}</h2>
      <p style={productStyle.description}>{description}</p>
      <p style={productStyle.price}>{price}</p>
      <button onClick={handleAddToCart}>
        <AddShoppingCartIcon /> Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductCard;
