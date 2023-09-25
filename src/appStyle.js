const appStyle = {
  container: {
    display: "flex",
    flexDirection: "row"
  },
  filters: {
    flex: 1 // Filtros ocupam 1 parte do espaço à esquerda
  },
  products: {
    flex: 2 // Produtos ocupam a maior parte do espaço central
  },
  cart: {
    flex: 1 // Carrinho ocupa 1 parte do espaço à direita
  }
};

export default appStyle;
