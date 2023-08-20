import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SCHEDULES from './schedule';
import Dropdown from 'react-bootstrap/Dropdown';
import CrisisAlertTwoToneIcon from '@mui/icons-material/CrisisAlertTwoTone';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsHockeyOutlinedIcon from '@mui/icons-material/SportsHockeyOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import AddIcon from '@mui/icons-material/Add';
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocationOnIcon from '@mui/icons-material/LocationOn';import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Home = () => {
  const initialItems = SCHEDULES.filter((initialElem)=>{
    return initialElem.category=='Cricket'
  });
  const[items,setItems]=useState(initialItems);
  const filterItem=(categItem)=>{
    const updatedItems = SCHEDULES.filter((curElem)=>{
      return curElem.category==categItem;
    });
    setItems(updatedItems);
  }
    return (
<>
<h2><CrisisAlertTwoToneIcon/>Select your favourite sport</h2>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={()=>filterItem('Cricket')}><SportsCricketIcon/><button variant="primary">CRICKET</button></Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>filterItem('Football')}><SportsSoccerIcon/><button variant="primary">FOOTBALL</button></Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>filterItem('Hockey')}><SportsHockeyOutlinedIcon/><button variant="primary">HOCKEY</button></Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>filterItem('Basketball')}><SportsBasketballOutlinedIcon/><button variant="primary">BASKETBALL</button></Dropdown.Item>
        <div className="mt-10">
          <Dropdown.Item><AddIcon/>ADD</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
<div className="container-fluid my-5">
  <div className="d-flex justify-content-around">
  {
    items.map((elem)=>{
      const {id,category,image,teamA,teamB,venue,time}=elem;
      return(
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Wonderful match to be played under some wonderful atmosphere
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h3>{teamA} (V/S) {teamB}</h3></ListGroup.Item>
        <ListGroup.Item><LocationOnIcon/>{venue}</ListGroup.Item>
        <ListGroup.Item><AccessTimeFilledIcon/>{time}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <AirplaneTicketIcon/><Card.Link href="#">TICKETS</Card.Link>
        <EmojiFoodBeverageTwoToneIcon/><Card.Link href="#">ORDER FOOD</Card.Link>
      </Card.Body>
    </Card>
    
        
      )
})
  }
  </div>
</div>
</>
  )
}

export default Home