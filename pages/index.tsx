import type { NextPage } from 'next'
import { Homepage } from '../components/pages/Homepage'

const Home: NextPage = () => {
  const listOfToDos: string[] = [
    'Gerador de nomes',
    'Countdown até uma data',
    'Jogo qualquer tipo simon says Jogo do galo',
    'Música/rádio ou seleciono uma musica para ouvir diretamente',
    'Estruturas de dados (pesquisa)',
    'TO-DO List para cada user',
    'weather check',
    'implementar todos os tipos posiveis de autenticação e role management',
    'dark mode com jotai na localstorage',
    'calculo de dinheiro a receber com a % da minha mãe',
    'calculo da média da universidade',
    'dados de crypto com o coingecko e alertas',
  ]

  return <Homepage listOfToDos={listOfToDos} />
}

export default Home
