import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  //get favorites from local storage

  const getFavorites = () => {
    try {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(favorites);
      console.log(favorites);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, [favorites]);



  return (
    <div className="">
      <div className="flex gap-10 flex-wrap py-4">
        {favorites.map((item, index) => {
          return (
            <>
              <NewsCard
                key={index}
                id={item.id}
                title={item.title}
                image={item.urlToImage}
                author={item.author}
                desc={item.description}
                date={item.publishedAt}
                link={item.url}
                type={"favorites"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
