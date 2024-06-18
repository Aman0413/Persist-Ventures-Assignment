import React from "react";
import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

function Home() {
  const [category, setCategory] = useState("business");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [LoaderState, SetloaderState] = useState(true);

  //calling news api
  const fetchData = async () => {
    try {
      const res =
        await axios.get`https://newsapi.org/v2/top-headlines?country=in&q=${searchQuery}&${category}=business&apiKey=56476b034fa84be684f38f3c04cc0531`;
      setData(res.data.articles);
      console.log(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex gap-10 flex-wrap py-4  p-2 justify-evenly">
        {/* add loader */}

        {data.length == 0 ? (
          <Loader />
        ) : (
          data.map((item, index) => {
            return (
              <>
                <NewsCard
                  key={index}
                  id={index}
                  title={item.title}
                  image={item.urlToImage}
                  author={item.author}
                  desc={item.description}
                  date={item.publishedAt}
                  link={item.url}
                  type="home"
                />
              </>
            );
          })
        )}
        {}
      </div>
    </div>
  );
}

export default Home;
