import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis:">
                <form id="search-teachers">

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
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input type="time" name="time" label="Horário"></Input>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;