import React, { useState } from 'react';
import * as S from '@/styles/modal';
import Image from 'next/image';
import Close from '../asset/img/close.svg';
import Welcome from '../asset/img/welcome.svg';
import LoginForm from './Auth/LoginForm';
import JoinForm from './Auth/JoinForm';

function Modal({
  setModalOpen,
  setToken,
}: {
  setModalOpen: (value: boolean) => void;
  setToken: (value: boolean) => void;
}) {
  const [login, setLogin] = useState(true);

  const handleSetToken = (newToken: boolean) => {
    setToken(newToken);
    setModalOpen(false);
  };

  return (
    <S.modalWrapper>
      <div className="dim" onClick={() => setModalOpen(false)}></div>
      <S.modalForm>
        <Close className="close" onClick={() => setModalOpen(false)} />
        <div className="contents">
          <S.modalLeft>
            <Welcome />
            <h4>환영합니다</h4>
          </S.modalLeft>
          <S.modalRight>
            {login ? (
              <LoginForm setLogin={setLogin} setModalOpen={setModalOpen} setToken={handleSetToken} />
            ) : (
              <JoinForm setLogin={setLogin} />
            )}
          </S.modalRight>
        </div>
      </S.modalForm>
    </S.modalWrapper>
  );
}

export default Modal;
