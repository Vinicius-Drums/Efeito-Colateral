// components/Useeffect.tsx
import React, { useState, useEffect } from "react";
import bandaLeaoLivreImage from "../Imagem/BandaLeaolivre.jpeg";

const Useeffect: React.FC = () => {
  const [contador, setContador] = useState(0);
  const limiteIngressos = 10;

  // useEffect para ação de montagem
  useEffect(() => {
    console.log("Componente Useeffect foi montado");

    // Função de limpeza a ser executada quando o componente for desmontado
    return () => {
      console.log("Componente Useeffect será desmontado");
    };
  }, []); // O segundo argumento (um array vazio) significa que o efeito será executado apenas uma vez

  // Função para comprar ingressos
  const comprarIngresso = () => {
    if (contador < limiteIngressos) {
      console.log("Comprar Ingresso clicado");
      const novoContador = contador + 1;
      setContador(novoContador);

      // Adiciona a verificação para exibir o alerta quando atingir 10 ingressos
      if (novoContador === limiteIngressos) {
        alert("Limite de ingressos atingido. Não é possível comprar mais.");
      }
    }
  };

  // Função para cancelar compra
  const cancelarCompra = () => {
    console.log("Cancelar Compra clicado");
    setContador(0);
  };

  // useEffect para manipular o título da página quando o contador muda
  useEffect(() => {
    console.log(`O contador foi atualizado: ${contador}`);
    document.title = `Ingressos Comprados: ${contador}`;
  }, [contador]);

  // Renderização do componente
  return (
    <div className="pagina">
      <h2 className="titulo">Banda Leão Livre</h2>
      <p className="descricao">Compre seu ingresso clicando no botão abaixo</p>
      <img
        src={bandaLeaoLivreImage}
        alt="Banda Leão Livre no Palco"
        className="imagem"
      />
      <p className="contador">Ingressos comprados: {contador}</p>
      <button
        className="botao"
        onClick={comprarIngresso}
        disabled={contador === limiteIngressos}
      >
        Comprar Ingresso
      </button>
      <button className="botao" onClick={cancelarCompra}>
        Cancelar Compra
      </button>
    </div>
  );
};

export default Useeffect;
