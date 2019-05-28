import React, {useState} from 'react'

function Form({addToList, loading}) {

    const [value, setValue] = useState('');

    const handleForm = e => {
        e.preventDefault();
        console.log('submit', value);
        if (!value) return;
        addToList(value);
        loading();
        setValue('');
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Form</h1>
            <form onSubmit={handleForm}>
                <label>Name : </label>
                <input type="text" placeholder="Enter Name..." value={value} required onChange={e => {
                    setValue(e.target.value);
                }}/>
                &nbsp;
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;