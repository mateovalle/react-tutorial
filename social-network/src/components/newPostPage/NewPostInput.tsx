import {TextField} from "@mui/material";

const NewPostInput = () => {

    return(
        <TextField
            id="outlined-textarea"
            label="New post"
            placeholder="Placeholder"
            multiline
        />
    )
}

export default NewPostInput