import React, { Component } from "react";
export const Team = (props) => {
    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title ">
                    <h2>RENCONTRER L'ÉQUIPE</h2>
                    
                </div>
                <div id="row">
                    {props.data
                        ? props.data.map((d, i) => (
                              <div key={`${d.name}-${i}`} >
                                  
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="member">
                                <div className="pictures">
                                    <img src="img/team/01.jpg" className="img1" style={{borderRadius:"15px"}}/>


                                </div>
                                <div className="memberinf" >
                                    <h4 >Sajid meriem</h4>
                                    <span>CEO-FOUNDER</span>
                                    <div className="social">
                                        <a href=""style={{color:"#6372ff"}}><i className="fa fa-twitter"></i></a>
                                        &nbsp;
                                        <a href="" style={{color:"#ff1493"}}><i className="fa fa-instagram"></i></a>
                                        &nbsp;
                                        <a href="" style={{color:"#6372ff"}}><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                       
                              </div>
                          ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
