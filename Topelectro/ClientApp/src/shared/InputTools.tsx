import React from 'react'
import Input from "../components/UI/Input/Input";


export const InputIsValid = (value: any, rules: any) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    if (rules.required)
        isValid = value.trim() !== '' && isValid;

    if (rules.minLength)
        isValid = value.length >= rules.minLength && isValid

    if (rules.maxLength)
        isValid = value.length <= rules.maxLength && isValid

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}

export const GenerateInputForms = (inputData: any, changeHandler: any) => {
    let inputs = Object.keys(inputData).map((propName: any) => {
        return <div key={propName}>
            <Input
                elementConfig={inputData[propName].elementConfig}
                elementType={inputData[propName].elementType}
                label={inputData[propName].label}
                invalid={inputData[propName].invalid}
                value={inputData[propName].value}
                changed={changeHandler} />
        </div>
    });
    return inputs
}

export const InputChangeHandler = (event: any, inputData: any, setInputData: any) => {
    let propName: any = event.target.name;
    let data: any = {
        ...inputData,
        [propName]: {
            ...inputData[propName],
            value: event.target.value
        }
    }
    setInputData(data)
}

export const ResetInput = (inputData: any, setInputData: any) => {
    let propNames = Object.keys(inputData)

    let data: any = { ...inputData }
    propNames.forEach((propName) => {
        data = {
            ...data,
            [propName]: {
                ...inputData[propName],
                value: ''
            }
        }
    })

    setInputData(data)
}

export const FormIsValid = (inputData: any, setInputData: any) => {
    let newInputData = { ...inputData }
    let isValid = true;

    Object.keys(newInputData).forEach(propName => {
        let valid = InputIsValid(newInputData[propName].value, newInputData[propName].rules)
        newInputData[propName].invalid = !valid;
        if (!valid) isValid = false;
    })

    if (!isValid) {
        setInputData(newInputData);
        return false;
    }
    return true;
}

export const ResetForm = (inputData: any, setInputData: any) => {
    let newInputData = { ...inputData }
    Object.keys(newInputData).forEach(propName => {
        newInputData[propName].value = "";
    })
    setInputData(newInputData);
}