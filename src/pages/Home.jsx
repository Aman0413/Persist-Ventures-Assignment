import React from "react";
import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Home({ selectedCategory }) {
  const [page, setPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  //calling news api
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&q=${searchQuery}&category=${selectedCategory}&apiKey=56476b034fa84be684f38f3c04cc0531`
      );

      setData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const selectHandler = (selectedPage) => {
    if (
      selectedPage >= 1 ||
      (selectedPage >= data.length && selectedPage !== page)
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="">
      <div className="flex gap-10 flex-wrap py-4  p-2 justify-evenly">
        {/* add loader */}

        {data.length == 0 ? (
          <Loader />
        ) : (
          data.slice(page * 6 - 6, page * 6).map((item, index) => {
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
      </div>

      {data.length > 0 && (
        <div className=" my-5 flex p-2 items-center justify-center space-x-4 text-xl cursor-pointer">
          <span onClick={() => selectHandler(page + 1)}>
            <FaArrowLeft className="text-[#3c82f6]" />
          </span>
          {[...Array(Math.ceil(data.length / 6))].map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => selectHandler(i + 1)}
                className={`${
                  page === i + 1 ? "text-[#3c82f6] font-bold" : ""
                }`}
              >
                {i + 1}
              </span>
            );
          })}

          <span onClick={() => selectHandler(page - 1)}>
            <FaArrowRight className="text-[#3c82f6]" />
          </span>
        </div>
      )}
    </div>
  );
}

export default Home;
