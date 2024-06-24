import React from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

//Imagens
import VRPranchaImage from './Assets/VRPrancha.png';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Section title="O que é?" imageUrl={VRPranchaImage}>
        <p>
          O Projeto Hefesto visa revolucionar os treinamentos em segurança do trabalho (SST) usando tecnologia de realidade virtual (RV). Muitos treinamentos de SST, como os da NR 35 (Trabalho em Altura) e NR 23 (Proteção Contra Incêndios), são limitados à teoria devido à falta de infraestrutura para a prática. A RV oferece uma solução ao permitir simulações controladas e realistas, aprimorando a experiência e eficácia do treinamento.
        </p>
      </Section>
      <Section title="Realidade Virtual">
        <p>
          A realidade virtual (VR) é uma tecnologia que cria ambientes tridimensionais imersivos, permitindo a interação em tempo real. Essa tecnologia é ideal para criar cenários de perigo controlados, onde os colaboradores podem praticar e vivenciar situações reais que poderiam encontrar no trabalho.
        </p>
      </Section>
      <Section title="Empresa Mitolog e Experiência no Mercado de Realidade Virtual">
        <p>
          A Mitolog é especializada em audiovisual, tecnologia, gestão de projetos e marketing, com uma vertente chamada Milltop Labs, focada em desenvolvimento de jogos e realidade virtual. A empresa tem experiência em eventos recreativos e desenvolvimento de jogos, incluindo títulos disponíveis na Playstore e um jogo de terror em VR em desenvolvimento.
        </p>
      </Section>
      <Section title="Abrangência e Mercado">
        <p>
          O uso de RV para treinamentos ainda é relativamente novo e subexplorado na Baixada Santista, embora já exista em São Paulo. Isso apresenta uma oportunidade para atingir empresas locais interessadas em inovações tecnológicas para SST. Além de treinamentos, a tecnologia pode ser utilizada em SIPATs e palestras.
        </p>
      </Section>
      <Section title="Plano de Ação">
        <ul>
          <li>
            <strong>Desenvolvimento do Software:</strong> Criar um software unificado com treinamentos para todas as Normas Regulamentadoras (NRs). Este software terá uma interface fácil de usar, permitindo que técnicos escolham a NR e iniciem simulações.
          </li>
          <li>
            <strong>Divulgação:</strong> Desenvolver uma campanha de marketing destacando as vantagens e a segurança dos treinamentos em RV.
          </li>
          <li>
            <strong>Treinamento dos Técnicos:</strong> Treinar técnicos para usar o novo software e equipamento, garantindo que eles possam guiar os colaboradores durante as simulações.
          </li>
          <li>
            <strong>Equipamentos:</strong> Utilizar óculos de RV, como o Meta Quest 2, que permite simulações compartilhadas e visualização em telas externas, facilitando o aprendizado colaborativo.
          </li>
        </ul>
      </Section>
      <Section title="Parceria">
        <p>
          Propomos uma parceria para o desenvolvimento e utilização do software de treinamentos. A empresa parceira fornecerá o investimento inicial para o desenvolvimento do software e, após sua conclusão, participará na divisão de comissões dos treinamentos realizados. A Milltop Labs cuidará das etapas de desenvolvimento, marketing e implementação, incluindo a disponibilização de óculos Meta Quest 2.
        </p>
      </Section>
      <Footer />
    </div>
  );
};

export default App;
