import React, { useEffect, useState } from 'react';
import TopScorerDetail from './TopScorerDetail';

const TopScore = () => {
    const [scorer,setScorer]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('https://apiv3.apifootball.com/?action=get_topscorers&league_id=302&APIkey=6aaa70eacd32265ad0d4a50abb3f43d85de68f31f3067c8c01ee7dbad42e018e')
    .then(res=>res.json())
    .then(data=>{
        //console.log(data)
        setScorer(data)
        setIsLoading(false)
    })

    },[])
    
    return (
        <div>
            <h4>Scorer</h4>
            <h2>https://apifootball.com/documentation/#Livescore</h2>
            <table className="table">
          <thead className="thead-light">
            <tr>
              <th>postiton </th>
              <th>Player Name</th>
              <th>Team Name</th>
             
              <th>Asists</th>
              <th>Goals</th>
              
             
             
            </tr>

          </thead>
          <tbody>
            {
              isLoading ? <img className="img-fluid" style={{marginTop:"50px"}} src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif" alt=""/> :
                scorer.map((scorer)=>{
                    return <TopScorerDetail key={scorer.player_place} scorer={scorer} />
                })
            }
            </tbody>
          </table>
        </div>
    );
};

export default TopScore;