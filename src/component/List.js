import React, {useState} from 'react'
import Form from "./Form";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from "@material-ui/core/Snackbar";
import Fade from '@material-ui/core/Fade';

function List() {

    const data = {};

    const [loading, setLoading] = useState(false);

    const [lists, setList] = useState([
        {
            "name": "Bhargav Chauhan.",
            "status": true
        },
        {
            "name": "Jaymin Panchal.",
            "status": true
        },
        {
            "name": "Vishal Jadav.",
            "status": true
        },
        {
            "name": "Mayank Panchal.",
            "status": true
        }
    ]);

    const addTodoList = list => {
        data.name = list;
        data.status = true;
        const newList = [...lists, data];
        setList(newList);
        setLoading(true);
    };

    const changeStatus = (index, status) => {
        console.log('change status to ', status);
        const allList = [...lists];
        allList[index].status = status;
        setList(allList);
        setLoading(true);
    };

    const deleteList = index => {
        const allList = [...lists];
        allList.splice(index, 1);
        setList(allList);
        setLoading(true);
    };

    const handleClose = () => {
        setLoading(false)
    };

    const formLoading = () => {
        setLoading(true)
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Snackbar
                open={loading}
                onClose={handleClose}
                TransitionComponent={Fade}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">New Name Added Successfully In List.</span>}
            />
            <h1>Lists</h1>
            {lists.map((list, i) => (
                <div key={i} style={{textDecoration: !list.status ? 'line-through' : ''}}>
                    <input type="checkbox" key={i}
                           onClick={() => changeStatus(i, !list.status)}/> {list.name}
                    <IconButton aria-label="Delete" onClick={() => deleteList(i)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            ))}
            <br/>
            <Form addToList={addTodoList} loading={formLoading}/>
        </div>
    )
}

export default List;