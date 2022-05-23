import React, { Component } from "react";
export const Features = (props) => {
    return (
        <>
            <div id="features" className="text-center" style={{borderRadius:"10px"}}>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h2 className="lo">PRINCIPALES ETUDES</h2>
                    </div>
                    <div className="row">
                        {props.data
                            ? props.data.map((d, i) => (
                                  <div key={`${d.title}-${i}`} className="col-xs-4 col-md-4">
                                      {" "}
                                    <span className="lop"> <i className={d.icon}></i></span> 
                                      <h3>{d.title}</h3>
                                      <p>{d.text}</p>
                                  </div>
                              ))
                            : "Loading..."}
                    </div>
                </div>
            </div>
        </>
    );
};
