import React, { useState } from "react";

const Filters = ({ onFiltersChange }) => {
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("crescente");

  const handleFiltersChange = () => {
    onFiltersChange({ valorMinimo, valorMaximo, busca, ordenacao });
  };

  const handleClearFilters = () => {
    // Limpa os campos de filtro
    setValorMinimo("");
    setValorMaximo("");
    setBusca("");
    setOrdenacao("crescente");

    // Chama a função de filtro automaticamente após limpar os campos
    onFiltersChange({
      valorMinimo: "",
      valorMaximo: "",
      busca: "",
      ordenacao: "crescente",
    });
  };

  return (
    <div className="filtros">
      <h2>Filtros</h2>
      <label>Valor mínimo:</label>
      <input
        type="number"
        value={valorMinimo}
        onChange={(e) => setValorMinimo(e.target.value)}
      />
      <label>Valor máximo:</label>
      <input
        type="number"
        value={valorMaximo}
        onChange={(e) => setValorMaximo(e.target.value)}
      />
      <label>Busca por nome:</label>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <label>Ordenação:</label>
      <select
        value={ordenacao}
        onChange={(e) => setOrdenacao(e.target.value)}
      >
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <button onClick={handleFiltersChange}>Aplicar Filtros</button>
      <button onClick={handleClearFilters}>Limpar Filtros</button>
    </div>
  );
};

export default Filters;
