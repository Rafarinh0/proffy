import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis:">
                <form id="search-teachers">

                    <Input name="subject" label="Matéria"></Input>
                    <Input name="week_day" label="Dia da semana"></Input>
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