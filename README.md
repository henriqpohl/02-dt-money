# Modulo 2

# Iniciando o Projeto DT-Money

Iniciando com a criacao do projeto

- Terminal: yarn create react-app 02-dt-money --template typescript
- Exportando os assets do Figma

Instalando o Styled Components

- Terminal: yarn add styled-components
            yarn add @types/styled-components -D

Instalando o mirageJS

- Terminal: yarn add miragejs

Instalando o Axios (Gerenciamento de requsicoes HTTP)

- Terminal: yarn add axios

Instalando a Biblioteca React Modal

- Terminal: yarn add react-modal

Anotacao sobre o a criacao do Modal

Para fazer o modal utilizamos Lib React Modal, começamos utilizando o useState estando isNewTransactionOpen
 e setIsNewTransactionOpen, fazemos 2 funções para abrir e fechar o modal (handleOpenNewTransactionModal
 e handleCloseNewTransactionModal) que recebem o isNewTransactionOpen True ou False.

Dentro do template Modal, usamos a tag isOpen para chamar a função isNewTransactionOpen para abrir o modal e a tag onRequestClose recebe HandleCloseNewTransaction para fechar o modal. 

Neste caso, o Modal fica no header, para deixaremos ele funcionando na raiz do documento, ou seja no App, para isso, jogaremos todas as funções criadas no header e também o template de modal para a raiz (App) e de la, iremos receber a função via propriedade (props)

Instalando o pacote Polished

- Terminal: yarn add polished

Alteração de cores via funções JS, por ex:
- import { darken } from 'polished';
- border-color: ${darken(0.1, '#d7d7d7')};


Alterando propiedade de um componente (props) via JS no CSS com StyledComponents

- Componente

EX:
<RadioBox
    type="button"
    isActive={type === 'classe do css'}>
    <span>Titulo do Botao</span>
</RadioBox>

- CSS

EX:
interface RadioBoxProps {
    isActive: boolean;
}

EX:
export const RadioBox = styled.button<RadioBoxProps>`
    background: ${(props) => props.isActive ? '#ccc' : 'transparent'};
`

- Utilizando mais uma propiedade do Componente, activeColor, que ira receber green ou red.

EX:
activeColor="red".

- Adiconamos a propiedade dentro da interface do CSS

EX:
interface RadioBoxProps {
    activeColor: "green" | "red";
}

E criamos umas constante que recebe um objeto com o nome e hex das cores.

EX:
const colors = {
    green: '#33cc95',
    red: '#e52e4d'
};

Depois aplicamos dentro no background a validacao e utilizamos o transparentize do Polished para deixar mais suave a cor do background.

EX:
background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
};




This project was created by [Henrique R. Pohl](https://github.com/henriqpohl).


**Note: Add some note here! HAHAHA**

