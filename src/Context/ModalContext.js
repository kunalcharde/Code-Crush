import { createContext, useState } from "react";
export const ModalContext = createContext(); // creation phase;

function ModalProvider({ children }) {
  const intialModalFields = {
    show: false, // true
    modalType: "", // 3
    identifiers: {
      folderId: "",
      cardID: "",
    },
  };
  // deep copy 
  const [isOpenModal, setIsOpenModal] = useState({ ...intialModalFields });
  const openModal = (value) => {
    setIsOpenModal(value);
  };
  const closeModal = () => {
    setIsOpenModal({ ...intialModalFields });
  };
  // this object is having properties that i need in my whole app;
  const ModalFeatures = {
    isOpenModal: isOpenModal, // state
    openModal: openModal, // fn
    closeModal: closeModal, // fn
  };
  return ( // pass things using value in context;
    <ModalContext.Provider value={ModalFeatures}>  
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;


// 1. creation phase (export const ModalContext = createContext();)
// 2. providing phase (passing things that are required in whole app in value prop of Context.Provider)
// 3. consuming phase (to be discussed)
