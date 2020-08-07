import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/53065132?s=460&u=c1a20d2916759ec972404717dfdf53324f6f4d5f&v=4" alt="Rafael Marinho" />
                <div>
                    <strong>Rafael Marinho</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta dos maiores teoremas da matemática avançada
                        <br />
                <br />
                        Apaixonado por errar integrais e mudar a vida das pessoas ao errar o troco do pão
                    </p>

            <footer>
                <p>
                    Preço/hora:
                            <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;