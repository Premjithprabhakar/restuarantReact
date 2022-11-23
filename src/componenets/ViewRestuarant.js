import React,{ useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";
import RestOp from './RestOp'
import ReviewOp from './ReviewOp'
import {useDispatch, useSelector} from 'react-redux';

function ViewRestuarant() {
    const params=useParams()
    // console.log(params.id);
    const [allRestuarant, setRestuarant] = useState([]);
      // function to call api to get all db.json(restuarant detailes)

    // const getRestuarant = async () => {
    //   await fetch("/db.json").then((data) => {
    //     data.json().then((result) => {
    //       setRestuarant(result.restaurants);
    //     });
    //   });
    // };
  // console.log(allRestuarant);
  useEffect(() => {
    // getRestuarant();
  }, []);
  const result= useSelector(state=>state.restuarantReducer)
console.log(result);
const {restaurantsList}=result

  const viewRest=restaurantsList.find(item=>item.id == params.id)
  // console.log(viewRest);
  return (
    <>
      {
        viewRest?(
          <Row className='p-3'> 
            <Col lg={3}>
            <Image src={viewRest.photograph}fluid/>
            </Col>
            <Col>
            <h6>ID:{viewRest.id}</h6>
            <h1>{viewRest.name}</h1>
            <h2>Cuisine Type:{viewRest.cuisine_type}</h2>
            <h3>Neighborhood:{viewRest.neighborhood}</h3>
            <h4>Addrees:{viewRest.address}</h4>
            <RestOp operate={viewRest.operating_hours}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ReviewOp review={viewRest.reviews}/>
            </Col>
          </Row>
        ):'null'
        }
    </>

    
  )
}

export default ViewRestuarant