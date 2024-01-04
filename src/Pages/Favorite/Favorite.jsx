import "./Favorite.css";

import React, { useContext } from "react";

import { GlobalContext } from "../../Component/GlobalContext/GlobalContext";
import Loading from "../../Component/Loading/Loading";
import FavoriteShow from "../../Component/FavoriteShow/FavoriteShow";

const Favorite = () => {
  const { favorites } = useContext(GlobalContext);

  if (!favorites) {
    return <Loading />;
  }

  return (
    <div>
      <div className="favoriteSection">
        <div className="jobsListCard">
          <ul className="jobCardInfo-job flex">
            {favorites.length === 0 ? (
              <h1 className="favoriteEmpty">Favorite Job Empty!</h1>
            ) : (
              favorites.map((value) => (
                <div key={value.id}>
                  <FavoriteShow data={value} />
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
