// 

import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>MediConnect E-Store</h2>
          <p>Buy Medicines and Essentials Supplies Online.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <a href="https://www.practo.com/" key={`${d.title}-${i}`}>
                    <div className="col-sm-6 col-md-4 col-lg-4 div-class">
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  </a>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
