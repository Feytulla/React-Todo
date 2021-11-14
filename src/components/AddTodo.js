import React, { useState } from "react";
import PropTypes from 'prop-types';

const styles = {
    input: {
        width: 400,
        height: 50,
        marginRight: 30,
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')


    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <input type="text" style={styles.input}
                {...input.bind}
            />
            <button type="submit">Add todo</button>
        </form>
    )

}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}



export default AddTodo