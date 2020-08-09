import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/';
import Textarea from '../../components/TextArea';

import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';

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
                    <Textarea name="bio" label="Biografia"></Textarea>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Espanhol', label: 'Espanhol' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Literatura', label: 'Literatura' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Redação', label: 'Redação' },
                            { value: 'Sociologia', label: 'Sociologia' }
                        ]}
                    />
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