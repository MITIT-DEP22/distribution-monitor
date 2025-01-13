import React, {useState} from 'react';
import Container from "../../shared/ui/Container/Container";
import LayoutContainer from "../../shared/ui/LayoutContainer/LayoutContainer";
import Button from "../../feature/Button/Button";
import SubTitle from "../../shared/ui/SubTitle/SubTitle";
import CreateGraduateModal from "./ui/CreateGraduateModal/CreateGraduateModal";

const GraduatesBlock = () => {

    const [createGraduateModal, setCreateGraduateModal] = useState(false);
    const openCreateGraduateModal = () => setCreateGraduateModal(true);
    const closeCreateGraduateModal = () => setCreateGraduateModal(false);

    return (
        <Container>
            <LayoutContainer span={4}>
                <SubTitle value={"Керування випускниками"}/>
                <Button onClick={openCreateGraduateModal}>Додати</Button>
                <CreateGraduateModal modal={createGraduateModal} close={closeCreateGraduateModal}/>
            </LayoutContainer>
        </Container>
    );
};

export default GraduatesBlock;