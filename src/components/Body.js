import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "Dominos",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "MCD",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
