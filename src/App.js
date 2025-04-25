import './App.css'; //apagar as demais coisas, essa é a estrutura básica
import Frase from './Frase'; //o novo componente deve ser importado aqui

function App() { //dar o mesmo nome pra função e pro arquivo

  const nome = "sara"
  const novoNome = nome.toUpperCase() //cria outra variável e coloca em capslock com o método
  const idade = 17

  function soma(a, b) {
    return a + b
  }

  return ( //precisa ter uma div e o class se torna className. é o jsx (equivalente ao index onde pode ter conteúdo HTML). o { nome } é um método de interpolação
    <div className="App">
      <h1>Página teste</h1>
      <h3>Nome: { novoNome }</h3>
      <h4>Idade: { idade }</h4>
      <p>Soma: { soma (5, 8)}</p>

      <Frase></Frase>
    </div>
  );
}

export default App; //a exportação precisa ser declarada
