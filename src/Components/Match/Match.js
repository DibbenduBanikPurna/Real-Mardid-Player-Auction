import React, { useEffect, useState } from 'react';
import MatchDetail from './MatchDetail';

const Match = () => {
    const [match,setMatch]=useState([])
    const [isLoading,setIsLoading]=useState(true)
useEffect(()=>{
    fetch('https://www.scorebat.com/video-api/v3/')
    .then(res=>res.json())
    .then(data=>{
        setMatch(data.response)    
        //console.log(data.response)
        setIsLoading(false)
    })
},[])

    return (
        <div className="row">
            <h2 className="pt-4 pb-4 bg-info">La Liga highlights SHow last Week</h2>
         
            {
                isLoading ?<img className="img-fluid" style={{marginTop:"50px"}} src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif" alt=""/> :
                match.filter((m)=>{
                   return m.competition ==="SPAIN: La Liga"
                }).map((match)=>{
                    return <MatchDetail key={match.title} match={match} />
                })
            }
        </div>
    );
};

export default Match;