import React, { useEffect, useState } from "react";
import './covid.css';

const Covid = () => {
    const[ data, setData]= useState([]);

    const getCovidData = async() =>{
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
    <>
    
    <h1 className="live">🔴LIVE</h1>
    <h2 className="heading">COVID-19 CORONAVIRUS TRACKER</h2>
    <section className="cards">
        <ul>
            <table>
                <tr>
                    <td>
                        <li className="card c1">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>OUR COUNTRY</span></p>
                                    <p className="card_total card_small">INDIA</p>
                                </div>
                            </div>
                        </li>
                    </td>
                    <td>    
                        <li className="card c2">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL RECOVERED</span></p>
                                    <p className="card_total card_small">{data.recovered}</p>
                                </div>
                            </div>
                        </li>
                    </td>
                    <td>
                        <li className="card c3">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL CONFIRMED</span></p>
                                    <p className="card_total card_small">{data.confirmed}</p>
                                </div> 
                            </div>
                        </li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li className="card c4">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL DEATHS</span></p>
                                    <p className="card_total card_small">{data.deaths}</p>
                                </div>
                            </div>
                        </li>
                    </td>
                    <td>
                        <li className="card c5">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>TOTAL ACTIVE</span></p>
                                    <p className="card_total card_small">{data.active}</p>
                                </div>
                            </div>
                        </li>
                    </td>
                    <td>    
                        <li className="card c6">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span>OUR UPDATED</span></p>
                                <p className="card_total card_small">{data.lastupdatedtime}</p>
                                </div>
                            </div>
                        </li>
                    </td>
                </tr>
            </table>
        </ul>
    </section>
    </>
    )
}

export default Covid