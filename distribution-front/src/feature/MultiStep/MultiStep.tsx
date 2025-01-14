import React, {useState, useEffect, FC} from 'react'
import {MultiStepProps, ChildState, MultiStepStyles} from './interfaces'
import css from "./MultiStep.module.css"
import Button from "../Button/Button";
import {BaseStyles} from "./baseStyles";

const getTopNavStyles = (activeStep: number, length: number): string[] => {
    const styles: string[] = []
    for (let i = 0; i < length; i++) {
        i === activeStep ? styles.push('doing') : styles.push('todo')
    }
    return styles
}

const getBottomNavState = (activeStep: number, length: number, stepIsValid: boolean) => {
    if (activeStep === 0) {
        return {
            prevDisabled: true,
            nextDisabled: !stepIsValid,
            hideLast: false
        }
    }
    if (activeStep > 0 && activeStep < (length - 1)) {
        return {
            prevDisabled: false,
            nextDisabled: !stepIsValid,
            hideLast: false
        }
    }
    return {
        prevDisabled: false,
        nextDisabled: !stepIsValid,
        hideLast: true
    }
}

const MultiStep: FC<MultiStepProps> = ({customStyles, prevButton, nextButton, children}) => {
    if (!children) throw TypeError("Error: Application has no children Components configured")
    const styles = typeof customStyles === 'undefined' ? BaseStyles as MultiStepStyles : customStyles

    const [activeChild, setActive] = useState(0)
    const [childIsValid, setChildIsValid] = useState(false)
    const [topNavState, setTopNavState] = useState(getTopNavStyles(activeChild, children.length))
    const [bottomNavState, setBottomNavState] = useState(getBottomNavState(activeChild, children.length, childIsValid))

    useEffect(() => {
        setTopNavState(getTopNavStyles(activeChild, children.length))
        setBottomNavState(getBottomNavState(activeChild, children.length, childIsValid))
    }, [activeChild, childIsValid])

    const childStateChanged = (childState: ChildState) => setChildIsValid(() => childState.isValid)
    children = React.Children.map(children, child => React.cloneElement(child, {signalParent: childStateChanged}))

    const handleNext = () => setActive(activeChild === children.length - 1 ? activeChild : activeChild + 1)

    const handlePrevious = () => setActive(activeChild > 0 ? activeChild - 1 : activeChild)

    const handleOnClick = (i: number) => childIsValid ? setActive(i) : console.log('Error: Invalid state')

    const foo = () => {
        children.map((c, i) => {
            console.log(c)
        })
    }

    const renderTopNav = () =>
        <ol style={styles.topNav}>
            {children.map((c, i) =>
                <li style={activeChild >= i ? styles.topNavStepPassed : styles.topNavStep}
                    onClick={() => handleOnClick(i)} key={i}>
                    {activeChild >= i
                        ?
                        <span style={styles.done}>{c.props.title ?? i + 1}</span>
                        :
                        <span style={styles.todo}>{c.props.title ?? i + 1}</span>}
                </li>
            )}
        </ol>

    const renderBottomNav = () =>
        <div style={styles.bottomNav}>
            <Button onClick={handlePrevious}
                    style={styles.prevButton}
            >
                {prevButton ? prevButton : <span>&#60;</span>}
            </Button>
            <Button onClick={handleNext}
                    style={bottomNavState.hideLast ? {display: 'none'} : styles.nextButton}
            >
                {nextButton ? nextButton : <span>&#62;</span>}
            </Button>
        </div>

    return (
        <div style={styles.component}>
            {renderTopNav()}
            <div style={styles.container}>
                {children[activeChild]}
            </div>
            {renderBottomNav()}
        </div>
    )
}

export default MultiStep
