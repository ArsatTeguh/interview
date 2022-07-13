import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [articel, setArticel] = useState(null);
  const API =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0002648f465e4d179ab79272cb3d3942";

  const dataArticel = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((res) => setArticel(res.articles));
  };
 
  useEffect(() => {
    dataArticel();
  }, []);

  return (
    <div className="w-screen bg-slate-100">
      <article className="flex flex-col items-center py-10 gap-4 ">
        <h1 className="font-semibold  text-4xl">List Data Article</h1>
        {articel?.map((data, index) => (
          <div key={index} className="shadow-lg data-article py-5 flex flex-col  bg-slate-50 px-4 rounded-lg max-w-sm">
            <img
              style={{ width: "20rem" }}
              src={data.urlToImage}
              alt=""
              className="rounded-lg mb-2 mx-auto"
            />
            <div className="info-article  gap-5 mb-3">
            <p className="text-sm text-slate-500">{data.author}</p>
            <p className="text-sm text-slate-500">{data.title}</p>
            </div>
           
            <p className="text-sm text-slate-700 mb-3">{data.content}</p>
           <a href={data.url}> <button className="flex justify-start py-2 px-4 text-white font-semibold hover:bg-red-700 bg-red-600 w-max rounded-xl">View Detail</button></a>
          </div>
               
        ))}
      </article>
    </div>
  );
};

export default Sidebar;
