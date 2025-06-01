import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const apiUrl = MENU_API + resId;
  const [resInfo, setResInfo] = useState(null);
  //fetchdata
  useEffect(() => {
    fetchData();
  }, [resId]);
  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`
    );
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
