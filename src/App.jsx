import axios from "axios";
import "./App.css";
import NewsCard from "./components/NewsCard";
import { useEffect, useState } from "react";

function App() {
  const [category, setCategory] = useState("business");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&${category}=business&apiKey=56476b034fa84be684f38f3c04cc0531`
      );

      setData(res.data.articles);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" p-4 flex flex-col items-center">
      <div className="w-[98%] p-4 bg-gray-100">
        <div className="bg-red-300 p-4 flex items-center justify-center space-x-5">
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
    </div>
  );
}

export default App;
