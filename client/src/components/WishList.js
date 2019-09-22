import React from "react";
import './WishList.css'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../assets/home-icon.png';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const WishList = ({ wishList }) => {
  const classes = useStyles();

  return (
    <div className="container-wishlist">
      <h3 className="title-wishlist">My Wish List</h3>
      <div className="add-btn-container">
        <NavLink to="/NewWishForm">
          <button className="btn-addwish">Add a wish</button>
        </NavLink>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ maxWidth: "2rem"}}>Description</TableCell>
              <TableCell style={{ maxWidth: "2rem"}}>Price&nbsp;(€)</TableCell>
              <TableCell style={{ maxWidth: "2rem"}}>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishList.map(wish => (
              <TableRow key={wish.id}>
                <TableCell align="left">{wish.description}</TableCell>
                <TableCell align="left">{wish.price}</TableCell>
                <TableCell align="left">
                  <NavLink to="/NewWishForm">
                    <button>See Details</button>
                  </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>







      <div className="footer">
        <NavLink to="/">
          <button className="btn-wishlist">Back</button>
          {/* <div classname="home-icon" >
            <img src={Home}/>
          </div> */}
        </NavLink>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(description, price, details) {
  return { description, price, details };
}



const mapStateToProps = state => ({
  wishList: state.wishList
});

export default connect(mapStateToProps)(WishList);
