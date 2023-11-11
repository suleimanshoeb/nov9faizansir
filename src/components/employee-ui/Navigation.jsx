import { Button, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

 export const Navigation = () => {
    const navdata=['home','logout']
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        {
                            navdata.map((item)=>(
                                <Grid item xs={2}>
                                    <Link to ={item==='home'?"/":`${item}`}>
                                    <Button variant='contained' fullWidth>{item}</Button>
                                    </Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

