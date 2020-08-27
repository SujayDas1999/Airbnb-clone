import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />

      <SearchResult
        img="data:image/jpeg;base64,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"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;
