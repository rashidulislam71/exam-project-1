import React, { useContext } from "react";
import "../PagesCSS/Pages.css";
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
        <div>
          <ul className="jobCardInfo">
            {favorites.length === 0 ? (
              <h1 style={{textAlign: "center", height: "90vh" }}>Empty</h1>
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
