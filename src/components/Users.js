import React from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { deleteUser } from '../actions/user';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class Users extends React.Component {
  state = {
    users : this.props.users || []
  }
  
  handleDelete = (index) => {
    let usersData = [...this.props.users];
    usersData.splice(index, 1);
    this.props.deleteUser(usersData[index])
    this.setState({users: usersData})
  }

  render() {
    if (!this.props.users) {
      this.props.history.push("/signup")
      return (<div>Loading....</div>)
    }
    return (
      <div>
        <AppBar position="static" color="default">
           <Toolbar>
             <Typography align="justify" variant="h6" color="inherit">
               Userlist
             </Typography>
           </Toolbar>
         </AppBar>
         <Paper >
           <Table >
             <TableHead>
               <TableRow>
                 <TableCell align="right">FirstName</TableCell>
                 <TableCell align="right">LastName</TableCell>
                 <TableCell align="right">Mobile</TableCell>
                 <TableCell align="right">Email</TableCell>
                 <TableCell align="center">Action</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {this.state.users.map((row, index) => (
                 <TableRow key={row.index}>
                   <TableCell align="right">{row.firstname}</TableCell>
                   <TableCell align="right">{row.lastname}</TableCell>
                   <TableCell align="right">{row.mobile}</TableCell>
                   <TableCell align="right">{row.email}</TableCell>
                   <TableCell align="right">
                     <Fab color="secondary" aria-label="Delete" >
                       <DeleteIcon onClick={() => this.handleDelete(index)}/>
                     </Fab>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </Paper>
       </div>
     )
   }
 }

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {deleteUser})(Users)