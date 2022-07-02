import React from "react";
import FeaturedItemCard from "./FeaturedItemCard";

function Featured() {
  return (
    <div className="featured">
      <p className="heading">Deal of the week</p>
      <hr />
      <div className="container">
        <div className="row featured-card">
          <div className="col-4">
            <FeaturedItemCard
              imageLink="https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg"
              altImage="Headphones"
              title="Candy Crunch Headphones"
              oldPrice="$65.50"
              newPrice="$45.00"
              sold={8}
              available={32}
              expire="May 1, 2021 00:00:00"
            />
          </div>
          <div className="col-4">
            <FeaturedItemCard
              imageLink="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=MH9075a2"
              altImage="Gaming chair"
              title="Eternal Blue Gaming Chair"
              oldPrice="$96.80"
              newPrice="$70.00"
              sold={10}
              available={20}
              expire="May 15, 2021 00:00:00"
            />
          </div>
          <div className="col-4">
            <FeaturedItemCard
              imageLink="https://resource.logitechg.com/w_1800,c_limit,f_auto,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-intro-nb.png?v=1"
              altImage="Gaming Mouse"
              title="Logitech G502 Gaming Mouse"
              oldPrice="$79.99"
              newPrice="$49.99"
              sold={20}
              available={26}
              expire="May 26, 2021 00:00:00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
