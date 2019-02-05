import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const style = {
  form: {
    width:'50%',
    margin: '25px 50px 75px 100px',
    align:'center',
    position: 'absolute',
    display: 'block',
    left: `300px`,
    top: `150px`
  },
  textFields: {
    left:'40%'
  },
  buttonSubmit: {
    left:'40%',
    margin: `50px`
  },
  buttonSignup: {
    left:"90%"
  }
}

class Login extends React.Component {
 
  state={
    username:'',
    password:''
    }

  render() {
    return (
        <div>
          <AppBar position="static" color="default">
             <Toolbar>
               <Typography variant="h6" color="inherit">
                 Login
               </Typography>
               <Button variant="contained" color="primary" style={style.buttonSignup} onClick={() => this.props.history.push("/signup")}>Signup</Button>
             </Toolbar>
           </AppBar>
           <div style={style.form}>
           <Paper elevation={1} >
             <TextField
               id="filled-uncontrolled"
               label="Enter your Username"
               margin="normal"
               variant="filled"
               style={style.textFields}
               onChange = {(e) => this.setState({username:e.target.value})}
             />
             <br/>
               <TextField
                 id="filled-uncontrolled"
                 label="Enter your password"
                 margin="normal"
                 type="password"
                 variant="filled"
                 style={style.textFields}
                 onChange = {(e) => this.setState({password:e.target.value})}
               />
               <br/>
               <Button variant="contained" color="primary" style={style.buttonSubmit} onClick={() => this.props.history.push("/users")}>
                 Submit
               </Button>
             </Paper>
             </div>
         </div>
    );
  }
}

export default Login;