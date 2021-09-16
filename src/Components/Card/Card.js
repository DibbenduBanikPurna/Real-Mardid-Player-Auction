import React, { useEffect, useState } from 'react';
// import Data from '../Data/Data';
import Header from '../Header/Header';
import CardDetails from './CardDetails';

const Card = () => {
    // const [data,setData]=useState(Data)
    const [players,setPlayers]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    //console.log(players)
    useEffect(()=>{
        fetch('https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=6aaa70eacd32265ad0d4a50abb3f43d85de68f31f3067c8c01ee7dbad42e018e')
        .then(res=>res.json())
        .then(data=>{
           //console.log(data[1].players)
            setPlayers(data[1].players)
            setIsLoading(false)
        }
        )
    },[])
    return (
        <div className="container">
        <div className="row mb-4">
            <Header/>
            <div className="col-md-12">
        
            <div className="row mt-5 pt-5">

           {
               isLoading ? <img className="img-fluid" style={{width:'150px',margin:'auto'}} src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif" alt=""/> : 
               
               
               players.map(player=>{
                   return <CardDetails player={player}/>
               })
               
               
           }
           
           </div>
           </div>
           
        </div>
        </div>
    );
};

export default Card;