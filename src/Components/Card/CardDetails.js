import React from 'react';

const CardDetails = ({player}) => {
    //console.log(player)
    return (
        <div className="col-md-4">
              <div className="card">
                  <img className="img-fluid" src={player.player_image} alt=""/>
                <div className="card-body">
                <p>Name: {player.player_name}</p>
                <p>Position: {player.player_type}</p>
                 <p>Age: {player.player_age}</p>
                <p>Joursey No:{player.player_number}</p>  
                 </div>   

             </div> 
              
        </div>
    );
};

export default CardDetails;