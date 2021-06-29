import React from 'react';


const Input = (props: any) => {
    let inputElement = null;
    const inputClasses = ['form-control'];
    if (props.invalid) {
        inputClasses.push('invalid-form');
    }

    let input = null;
    switch (props.elementType) {
        case "input":
            inputElement =
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        // case ('select'):
        //     inputElement = (
        //         <select
        //             className={inputClasses.join(' ')}
        //             value={props.value}
        //             onChange={props.changed}>
        //             {props.elementConfig.options.map((option: any) => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.displayValue}
        //                 </option>
        //             ))}
        //         </select>
        //     );
        //     break;
        // default:
        // inputElement = <input
        //     className={inputClasses.join(' ')}
        //     {...props.elementConfig}
        //     value={props.value}
        //     onChange={props.changed} />;
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;