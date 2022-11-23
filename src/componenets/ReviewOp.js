import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function ReviewOp({review}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="success"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            review.map(item=>(
              <div>
                <h6>{item.name}:<span>{item.date}</span></h6>
                <p>Rating:{item.rating}</p>
                <p>Comments:{item.comments}</p>

              </div>
            ))
          }
          
        </div>
      </Collapse>
    </>
  )
}

export default ReviewOp