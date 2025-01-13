import React from 'react';
import Container from "../../shared/ui/Container/Container";
import LayoutContainer from "../../shared/ui/LayoutContainer/LayoutContainer";
import css from "./ToDoPage.module.css"
import Title from "../../shared/ui/Title/Title";

const ToDoPage = () => {
    return (
        <>
            <Title value={"To Do List"}/>
            <Container>
                <LayoutContainer span={5}>
                    <ol className={css.list}>
                        <li>
                            CRUD випускників - work in progress
                        </li>

                        <li>
                            CRUD вч
                        </li>
                        <li>
                            CRUD регіони
                        </li>
                        <li>
                            CRUD ВОС
                        </li>
                        <li>
                            CRUD років випуску
                        </li>
                        <li>
                            CRUD спеціальностей
                        </li>
                    </ol>
                </LayoutContainer>
            </Container>
        </>
    );
};

export default ToDoPage;