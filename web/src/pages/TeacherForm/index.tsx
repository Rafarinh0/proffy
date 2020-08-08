import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que bom que você quer dar aulas!"
                description="O primeiro passo é preencher este formulário de inscrição: "
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"></Input>
                    <Input name="avatar" label="Foto de Perfil"></Input>
                    <Input name="whatsapp" label="WhatsApp"></Input>

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" label="Matéria"></Input>
                    <Input name="cost" label="Custo da hora/aula"></Input>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;