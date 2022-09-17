import React from 'react';
import data from "../data"
import "./Cards.css";
const Cards = () => {

    return <div className='card'>
        {
            data.map((value, index) => {
                return (<div key={index}>
                    <div className='cards' >
                    <img src="" alt={value.logo} />
                    <h3>{value.heading}</h3>
                    <p>{value.peragraph}</p>
                    <h6>{value.win}</h6>
                    <h3>Copiers - {value.Copiers}</h3>
                    <div className="inner_card">
                        <div style={{color:"green"}}>Backtest Performance</div>
                        <div><span >Total traded triggered</span><span>{value.T_T_triggered}</span></div>
                        <div id='a'><span >Successful Outcomes</span><span>
                            {value.successful}
                        </span></div>
                        <div><span >Successful Percentage</span><span>{value.percentage}</span></div>
                        <div id='a'><span >Average Sharpe Ratio</span><span>{value.Sharpe_ratio}</span></div>
                        <div><span >Maximum Drawdown</span><span>{value.drawdown}</span></div>
                    </div>
                    </div>
                </div>)
            })
        }
    </div>;
};

export default Cards;
