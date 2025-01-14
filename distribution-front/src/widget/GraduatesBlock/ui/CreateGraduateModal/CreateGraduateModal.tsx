import React, {FC} from 'react';
import css from "./CreateGraduateModal.module.css"
import Modal from "../../../../feature/Modal/Modal"
import CreateServicemanStep from "./ui/CreateServicemanStep/CreateServicemanStep";
import CreatePositionStep from "./ui/CreatePositionStep/CreatePositionStep";
import CreateYearStep from "./ui/CreateYearStep/CreateYearStep";
import CreateMilitaryBaseAndRegionStep from "./ui/CreateMilitaryBaseAndRegionStep/CreateMilitaryBaseAndRegionStep";
import MultiStep from "../../../../feature/MultiStep";
import {multiStepStyles} from "./styles/multistepStyles";
import BasicStep from "../../../../feature/MultiStep/BasicStep";

interface CreateGraduateModal {
    modal: boolean;
    close: () => void;
}

const CreateGraduateModal: FC<CreateGraduateModal> = ({modal, close}) => {

    return (
        <Modal isOpen={modal} onClose={close}>
            <div className={css.container}>
                <MultiStep customStyles={multiStepStyles}>
                    <BasicStep title={"Військовослужбовець"}>
                        <CreateServicemanStep/>
                    </BasicStep>

                    <BasicStep title={"Посада"}>
                        <CreatePositionStep/>
                    </BasicStep>

                    <BasicStep title={"Рік"}>
                        <CreateYearStep/>
                    </BasicStep>

                    <BasicStep title={"ВЧ та регіон"}>
                        <CreateMilitaryBaseAndRegionStep/>
                    </BasicStep>
                </MultiStep>
            </div>
        </Modal>
    );
};

export default CreateGraduateModal;