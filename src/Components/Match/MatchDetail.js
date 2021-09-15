import React from 'react';

const MatchDetail = ({match}) => {
    //console.log(match)
    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <div className="card-body">

                
            <p className="text-primary">{match.competition}</p>
            <a rel="noreferrer" href={match.matchviewUrl} target="_blank" ><img className="img-fluid" src={match.thumbnail} alt="" /> </a>
            <p className="text-info">{match.title}</p>
            <p className="text-danger">{new Date(match.date).toLocaleString()}</p>
            </div>
            </div>
         
        </div>
    );
};

export default MatchDetail;