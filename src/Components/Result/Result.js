import React, { useEffect, useState } from 'react';
import ResultDetail from './ResultDetail';

const Result = () => {
    const [res,setRes]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=6aaa70eacd32265ad0d4a50abb3f43d85de68f31f3067c8c01ee7dbad42e018e')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            setRes(data)
            setIsLoading(false)
        })
    },[])
    return (
        <div className="container">
          {isLoading ? <img className="img-fluid" style={{marginTop:"50px"}} src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif" alt=""/> :<>
            <h2>La Liga<br/><span className="text-primary" style={{fontSize:'18px'}}>2021/2022 season</span></h2>
            <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Total Match</th>
              <th>Win</th>
              <th>Draw</th>
              <th>Lost</th>
             
              <th>Points</th>
            </tr>

          </thead>
          <tbody>
            {
              // isLoading ? <img className="img-fluid" style={{marginTop:"50px"}} src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif" alt=""/> :
                res.map(res=>{
                    return <ResultDetail key={res.team} res={res}/>
                })
            }
             </tbody>
          </table>
          </>}
            
        </div>
    );
};

export default Result;