import React from 'react';

const TopScorerDetail = ({scorer}) => {
    //console.log(scorer)
    return (
        <tr>
        <td>{scorer.player_place}</td>
        <td>{scorer.player_name}</td>
        <td>{scorer.team_name}</td>
        <td>{scorer.assists}</td>
        <td>{scorer.goals}</td>
        </tr>
    );
};

export default TopScorerDetail;