import React from "react";
import cartStyle from "./cartStyle";

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  // Função para agrupar itens por tipo e calcular o total de cada tipo
  const groupAndCalculateTotal = () => {
    const groupedItems = {};

    for (const item of cartItems) {
      const { title, price } = item;
      if (groupedItems[title]) {
        groupedItems[title].quantity += 1;
        groupedItems[title].total += price;
      } else {
        groupedItems[title] = {
          quantity: 1,
          total: price,
        };
      }
    }

    return groupedItems;
  };

  const groupedItems = groupAndCalculateTotal();

  const calculateTotal = () => {
    let total = 0;
    for (const title in groupedItems) {
      total += groupedItems[title].total;
    }
    return total;
  };

  const total = calculateTotal();

  return (
    <div style={cartStyle.container}>
      <h2>Seu carrinho</h2>
      <ul style={cartStyle.ul}>
        {Object.keys(groupedItems).map((title, index) => (
          <li key={index} style={cartStyle.li}>
            {title} x{groupedItems[title].quantity} - ${groupedItems[title].total}
            <button onClick={() => onRemoveItem(title)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={onClearCart}>Limpar Carrinho</button>
    </div>
  );
};

export default Cart;
