import React from 'react';

const ResultDetail = ({res}) => {
    //console.log(res)
    return (
   
   
      <tr>
      <td>{res.overall_league_position}</td>
      <td>{res.team_name}</td>
      <td>{res.overall_league_payed}</td>
      <td>{res.overall_league_W}</td>
      <td>{res.overall_league_D}</td>
      <td>{res.overall_league_L}</td>
     
      <td>{res.overall_league_PTS}</td>
     
    </tr>
 
    
 
    );
};

export default ResultDetail;