import React from "react"

export interface MultiStepStyles {
    component?: React.CSSProperties
    bottomNav?: React.CSSProperties
    topNav?: React.CSSProperties
    topNavStep?: React.CSSProperties
    topNavStepPassed?: React.CSSProperties
    todo?: React.CSSProperties
    done?:React.CSSProperties
    prevButton?: React.CSSProperties
    nextButton?: React.CSSProperties
    container?: React.CSSProperties
}

export interface MultiStepProps {
    customStyles?: MultiStepStyles,
    prevButton?: React.ReactElement,
    nextButton?: React.ReactElement,
    children: React.ReactElement[]
}

export interface ChildState {
    isValid: boolean
    goto: number
}