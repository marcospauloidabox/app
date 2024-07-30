<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Bem-vindo ao Sistema de Lista de Produtos</h1>
        <v-divider></v-divider>
        <p>
          Neste sistema, desenvolvido como parte de um teste técnico com Vue.js, você encontrará uma
          interface de usuário intuitiva para navegar por uma lista de produtos. A aplicação foi
          projetada para oferecer uma experiência agradável tanto em dispositivos móveis quanto em
          desktops, garantindo responsividade e acessibilidade.
        </p>
        <h2>Funcionalidades Principais:</h2>
        <ul>
          <li>
            <strong>Exibição de Produtos:</strong> A página inicial lista produtos com suas imagens,
            nomes e preços. Estes dados são obtidos de uma API fictícia, garantindo que a interface
            esteja sempre atualizada com as informações mais recentes.
          </li>
          <li>
            <strong>Detalhes dos Produtos:</strong> Ao clicar em qualquer produto, o usuário pode
            visualizar detalhes completos, incluindo uma descrição detalhada, uma imagem ampliada e
            o preço. Esta funcionalidade é acessível via uma modal ou uma nova página,
            proporcionando uma experiência de navegação suave e informativa.
          </li>
          <li>
            <strong>Filtros de Produtos:</strong> Para facilitar a busca, o sistema inclui um campo
            de busca para filtrar produtos por nome, além de um filtro de faixa de preço que permite
            aos usuários selecionar produtos dentro de um intervalo específico de valores.
          </li>
        </ul>
        <h2>Tecnologias e Implementação:</h2>
        <ul>
          <li>
            <strong>Componentes Reutilizáveis:</strong> A aplicação é construída com componentes
            reutilizáveis, como cartões de produto e detalhes do produto, permitindo fácil
            manutenção e expansão.
          </li>
          <li>
            <strong>Integração com API:</strong> Os dados dos produtos são buscados de uma API
            fictícia, garantindo uma integração eficiente e atualizações em tempo real.
          </li>
        </ul>
        <h2>Avaliação e Qualidade:</h2>
        <ul>
          <li>
            <strong>Qualidade do Código:</strong> O código foi organizado de maneira clara e
            legível, com uso adequado de componentes Vue.js, garantindo uma estrutura de fácil
            compreensão e manutenção.
          </li>
          <li>
            <strong>Interface de Usuário:</strong> A atenção aos detalhes de design foi uma
            prioridade, com uma interface visualmente atraente e funcional, otimizada para garantir
            um desempenho rápido e suave.
          </li>
        </ul>
        <h2>Instruções para Colaboradores:</h2>
        <p>
          Os colaboradores e avaliadores podem encontrar o código-fonte no repositório GitHub do
          projeto, onde também está disponível um README com instruções detalhadas para executar o
          projeto localmente.
        </p>
        <p>Agradecemos por visitar e explorar nosso sistema de lista de produtos!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
