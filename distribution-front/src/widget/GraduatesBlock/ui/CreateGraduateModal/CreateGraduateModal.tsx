import React, {FC, useState} from 'react';
import css from "./CreateGraduateModal.module.css"
import Modal from "../../../../feature/Modal/Modal"
import MultiStep from 'react-multistep'
import {NavButton} from "react-multistep/build/interfaces";
import CreateServicemanStep from "./ui/CreateServicemanStep/CreateServicemanStep";
import CreatePositionStep from "./ui/CreatePositionStep/CreatePositionStep";
import CreateYearStep from "./ui/CreateYearStep/CreateYearStep";
import CreateMilitaryBaseAndRegionStep from "./ui/CreateMilitaryBaseAndRegionStep/CreateMilitaryBaseAndRegionStep";
import {multiStepStyles} from "./css/multistepStyle";

interface CreateGraduateModal {
    modal: boolean;
    close: () => void;
}

const CreateGraduateModal: FC<CreateGraduateModal> = ({modal, close}) => {

    const [activeStep, setActiveStep] = useState(0);


    const prevBtn: NavButton = {
        title: "Назад",
        style: {background: "#212121", color: "white"},
    }

    const nextBtn: NavButton = {
        title: "Далі",
        style: {background: "#212121", color: "white"},
    }

    const steps = [
        {
            title: "Військовослужбовець",
            component: <CreateServicemanStep/>
        },
        {
            title: "Посада",
            component: <CreatePositionStep/>
        },
        {
            title: "Рік",
            component: <CreateYearStep/>
        },
        {
            title: "ВЧ та регіон",
            component: <CreateMilitaryBaseAndRegionStep/>
        }
    ]

    // stepCustomStyle={{
    //     color:"#1B1B1E",
    //         borderBottom:"2px solid #1B1B1E",
    //
    // }}

    return (
        <Modal isOpen={modal} onClose={close}>
            <MultiStep styles={multiStepStyles} steps={steps} prevButton={prevBtn} nextButton={nextBtn} activeStep={0}>
                {/*<div>*/}
                {/*    створення військовослужбовця*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    створення посади*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    створення року випуску*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    створення вч з регіоном*/}
                {/*</div>*/}
            </MultiStep>
        </Modal>
    );
};

export default CreateGraduateModal;