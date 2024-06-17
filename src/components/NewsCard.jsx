import React from "react";

function NewsCard({ title, image, author, desc, date, link }) {
  function convertDate(dateString) {
    // Parse the input date string
    const date = new Date(dateString);

    // Define arrays for month and day names
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract the date components
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Format the date to "21 Oct 2019"
    return `${day} ${month} ${year}`;
  }

  return (
    <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-full md:w-1/3 rounded-lg">
      <a href={link} className="cursor-pointer" target="_blank">
        <img
          src={image ? image : ""}
          alt="News Image"
          className="w-full object-cover h-32 sm:h-48 md:h-64 hover:scale-110 transition-all ease-in-out duration-300"
        />

        <div className="p-4 md:p-6">
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
            {author ? author : ""}
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            {title ? title : "Lorem ipsum dolor sit amet."}
          </h3>
          <div className="text-sm flex flex-col justify-center">
            <p>{desc ? desc : ""}....</p>
            <p className="leading-none mt-5 ">{convertDate(date)}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
