import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

 export const EmpDetail = () => {
    const mydata=useLocation()
    const data=mydata.state
    console.log('data------>',data);
    return (
       <Grid container spacing={2}>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <img style={{width:"200px"}} src="https://lh6.googleusercontent.com/proxy/HlcIjXldtUdCHO5NJXnL3xy41M1t00lHvrRJ0KffBiJYd-iSOHm_GOAJPJ3k8XOU8Me93qMD9lH2Q_UkpVWLj--4c9jXIG4rBa1h" alt="" />
                        </Grid>
                        <Grid item xs={6}>
                            <h1>{`${data.fname}${data.lname}`}</h1>
                            <h3>{data.email}</h3>
                            <h3>{data.mobile}</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nisi placeat, nesciunt molestiae voluptatem facere nulla culpa amet ad animi?</p>
                        </Grid>
                        <Grid item xs={3} align="center">
                            <div style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:data.IsActive?'green':'red'}}></div>
                            <h3>{data.IsActive?"Active":"De-Active"}</h3>
                            <h1>{data.empid}</h1>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
       </Grid>
    );
};

