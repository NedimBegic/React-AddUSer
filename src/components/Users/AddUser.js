import React, { useState } from "react";
import Card from '../Ul/Card';
import Button from '../Ul/Button';
import ErrorModule from '../Ul/ErrorModule';
import './AddUser.css';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError( {
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        };
        if (+enteredAge < 1) {
            setError( {
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
            return;
        };
        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = event => {
        setEnteredUserName(event.target.value)
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    };

    const errorHandler = props => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={'input'}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Usernake</label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age (Year)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;