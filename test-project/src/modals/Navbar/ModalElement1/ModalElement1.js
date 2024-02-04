import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalImage from '@src/assets/images/i-missed-the-part-where-thats-my-problem.gif';
import ModalImage2 from '@src/assets/images/bully-maguire-laughing.gif';
import './ModalElement1.css';

const ModalElement1 = ({ closeModal }) => {
  const [image, setImage] = useState(ModalImage);
  const [buttonText, setButtonText] = useState('What the hell!?');
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const changeImageTemporarily = () => {
    setButtonClickCount((prevCount) => prevCount + 1);

    if (buttonClickCount % 2 === 0) {
      // Mudar a imagem e o texto temporariamente
      setImage(ModalImage2);
      setButtonText('...');
    } else {
      // Fechar o modal após a segunda mudança no botão
      closeModal();
    }
  };

  useEffect(() => {
    // Retornar à imagem e texto originais quando o modal é fechado
    return () => {
      setImage(ModalImage);
      setButtonText('What the hell!?');
      setButtonClickCount(0);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box open" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-container">
          <img src={image} alt="Imagem do Modal" className="modal-image" />
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={closeModal} />
        </div>
        <button className="additional-button" onClick={changeImageTemporarily}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalElement1;