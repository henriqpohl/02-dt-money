import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { useState } from 'react';
import Modal from 'react-modal';

//import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

// const Title = styled.h1`
//   font-size: 64px;  
//   color: #8257e6;
// `

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}>
                
        <h2>Cadastrar Transacao</h2>
               
      </Modal>

      <GlobalStyle />
    </>
  );
}