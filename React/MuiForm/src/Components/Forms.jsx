import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {useForm} from 'react-hook-form';
import {object,string} from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";



export default function Forms() {

    const userSchema=object({
        fname:string().
        required("Must have a first name").
        max(3,"Can not be longer than 3 characters"),
        email:string().required("Must have a valid email address")
    })

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm({
        resolver:yupResolver(userSchema)
    });

    function handleChange(evt){
        setValue(evt.target.name, evt.target.value);
    }
    const onSubmit=(data)=>{
        const JSON_data=JSON.stringify(data);
        console.log(JSON_data)
        reset()


    }
    return (
        <Box
            component="form"
            sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                {...register("fname")}
                onChange={handleChange}
                error={errors.fname !== undefined}
                helperText={errors.fname &&<span>{errors.fname.message}</span>}
                required
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email")}
                onChange={handleChange}
                error={errors.email !== undefined}
                helperText={errors.email &&<span>{errors.email.message}</span>}
                required
            />
            <br/>
            <Button type="submit" variant="contained" color={"success"}>Submit</Button>
        </Box>
    );
}
