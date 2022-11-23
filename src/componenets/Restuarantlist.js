import React, { useState, useEffect } from "react";
import RestuarantCards from "./RestuarantCards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RestuarantListAction} from '../Action/restuarantListAction';
import {useDispatch, useSelector} from 'react-redux';
// import {useSelector}
function Restuarantlist() {
  // create state  to hold all restuarant
  const [allRestuarant, setRestuarant] = useState([]);
  // function to call api to get all db.json(restuarant detailes)
  // const getRestuarant = async () => {
  //   await fetch("/db.json").then((data) => {
  //     data.json().then((result) => {
  //       setRestuarant(result.restaurants);
  //     });
  //   });
  // };
const dispatch=useDispatch()
const result= useSelector(state=>state.restuarantReducer)
console.log(result);
const {restaurantsList}=result
  // console.log(allRestuarant);

  useEffect(() => {
    // getRestuarant()
    dispatch(RestuarantListAction())
  },[])


  return (
    <Row>
      {restaurantsList.map((item) => (
        <Col sm={12} md={8} lg={4} xl={3}>
          <RestuarantCards restuarant={item} />
        </Col>
      ))}
    </Row>
  );
}

export default Restuarantlist;
