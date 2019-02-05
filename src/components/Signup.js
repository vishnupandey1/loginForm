import React from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { addUser } from '../actions/user';
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
    left:"50%"
  }
}

class Signup extends React.Component {
 
  state={
    firstname: '',
    lastname: '',
    mobile: '',
    email: ''
  }
  
  handleSubmit = () => {
    const {firstname, lastname, mobile, email} = this.state;
    let users = {
     firstname,
     lastname,
     mobile,
     email
    }
    this.props.addUser(users)
    this.props.history.push('/users')
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
           <Toolbar>
             <Typography style={style.buttonSignup} align="justify" variant="h6" color="inherit">
               Signup
             </Typography>
           </Toolbar>
         </AppBar>
         <div  style={style.form}>
         <Paper elevation={1} >
           <TextField
             id="standard-uncontrolled"
             label="FirstName"
             margin="normal"
             variant="filled"
             fullWidth
             onChange = {(e) => this.setState({firstname:e.target.value})}
           />
           <br/>

           <TextField
             id="standard-required"
             label="LastName"
             margin="normal"
             variant="filled"
             fullWidth
             onChange = {(e) => this.setState({lastname:e.target.value})}
           />
           <br/>

           <TextField
             id="standard-error"
             label="Mobile"
             margin="normal"
             variant="filled"
             fullWidth
             onChange = {(e) => this.setState({mobile:e.target.value})}
           />
           <br/>

           <TextField
             type="email"
             id="standard-disabled"
             label="Email"
             margin="normal"
             variant="filled"
             fullWidth
             onChange = {(e) => this.setState({email:e.target.value})}
           />
           <br/>
           <Button variant="contained" color="primary" style={style.buttonSubmit} onClick={(event) => this.handleSubmit()}>
             Submit
           </Button>
         </Paper>
         </div>
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { addUser } )(Signup)
