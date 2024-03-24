import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthService from '/app/services/AuthService';
  


function Battleship({socket, gameState}) {
    const notifyServer = (e) => { //<!--- send message to server explicity, such as user input
        socket.sendMessageToServer({test: e.target.value})
    }
    //gameState <!--- state viewable to the current user
    return <div>
        input data here for Battleship
    </div>
}

export default Battleship;