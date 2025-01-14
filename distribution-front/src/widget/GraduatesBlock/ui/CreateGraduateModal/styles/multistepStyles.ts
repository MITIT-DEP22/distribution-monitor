import {MultiStepStyles} from "../../../../../feature/MultiStep/interfaces";

const black = "#1B1B1E"
const orange = "#FAA916"
const gray = "#6D676E"
const white = "#d7cece";

const component = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
}

const topNav = {
    display: 'flex',
    marginTop: "24px",
    marginBottom: "24px",
    justifyContent: "space-between",
    listStyleType: "none",
    fontSize:"18px",
    fontWeight: 800
}
const topNavStep = {
    color: gray,
    cursor: 'pointer',
    width: "100%",
    borderBottom: `3px solid ${gray}`,
    display: 'flex',
    justifyContent: "center",
}

const topNavStepPassed = {
    color: black,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: "center",
    width: "100%",
    borderBottom: `3px solid ${black} `,
}

const container = {
}

const bottomNav = {
    display: "flex",
    justifyContent: "space-between",
}

const todo = {
    color: gray,
}

const done = {
    color: black
}

const doing = {
    color: black,
}

export const multiStepStyles: MultiStepStyles = {
// @ts-ignore
    component,
    topNav,
    topNavStep,
    todo,
    container,
    bottomNav,
    topNavStepPassed,
    done
}
