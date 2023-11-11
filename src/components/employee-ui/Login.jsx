import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 export const Login = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors,setErrors]=useState('')

    const handleLogin=()=>{
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)

        const emails=localStorage.getItem('email')
        const passwords=localStorage.getItem('password')

        if(emails==="pickupbiz@gmail.com"&&passwords==="12345"){
         navigate('/')
        }else{
            navigate('/login')
            setErrors("Incorrect email or password");
        }
    };
    setTimeout(() => {
        setErrors("");
    },4000);
    return (
        <div className='content-login' >
           
                    <Grid container spacing={2}align="center">
                        <Grid item xs={8}> </Grid>
                        <Grid item xs={3}  >
                            <Grid container spacing={2}>
                                <Card  sx={{marginTop:"30px",opacity:0.8,height:"350px"}}>
                                    <CardContent>
                                    <Grid item xs={12}>
                                    <Typography align='center' variant='h5'>Employee Login </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={(e)=>setEmail(e.target.value)} label="Email Id" variant='outlined' fullWidth/>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                <TextField onChange={(e)=>setPassword(e.target.value)} label="Password" variant='outlined' fullWidth/>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <Button onClick={handleLogin} fullWidth variant='contained'>Login</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{color:"red"}}>{errors}</span>
                                </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
               
        
        </div>
    );
};

