import React from "react";
import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [category, setCategory] = useState("business");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  //calling news api
  const fetchData = async () => {
    try {
      const res =
        await axios.get`https://newsapi.org/v2/top-headlines?country=in&q=${searchQuery}&${category}=business&apiKey=56476b034fa84be684f38f3c04cc0531`;
      setData(res.data.articles);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);

  return (
    <div className="">
      <div className="bg-red-300 p-4 flex items-center justify-center space-x-5">
        {/* <div>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
      </div> */}
        <div>
          <form className="flex space-x-2">
            <input
              className="p-2 rounded-md"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            <button
              type="submit"
              className="bg-gray-300 text-black  py-2 px-4 rounded-md hover:bg-gray-400 transition-all ease-in-out duration-200 active:scale-95 "
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap py-4">
        {data.map((item, index) => {
          return (
            <>
              <NewsCard
                key={index}
                title={item.title}
                image={item.urlToImage}
                author={item.author}
                desc={item.description}
                date={item.publishedAt}
                link={item.url}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
