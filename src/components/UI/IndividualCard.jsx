import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getIndData } from "../../APIs/MainApi";

const IndividualCard = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["film", id],
    queryFn: () => getIndData(id),
  });

  if (isLoading) return <div id="loading-overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">

    <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
    </svg>

    <span className="text-white text-3xl font-bold">Loading...</span>

</div>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div className="main-container flex flex-col h-screen w-screen justify-center items-center gap-6">
        <div className="heading text-2xl text-custom-yellow">Movies Details</div>
        {
          <div className="container-ind-cards h-2/3 gap-3 flex justify-center items-center bg-custom-header-bg w-2/3 text-white shadow-2xl shadow-red-600">
            <img className="img  h-96 w-96" src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt="" />
            <div className="cont-2 flex flex-col gap-2 bg-custom-header-bg">
            <div className="">Movie: {data.original_title}</div>
            <div>Language :{data.original_language}</div>
            <div>popularity :{data.popularity}</div>
            <div>Year :{data.release_date}</div>
            <div>Vote :{data.vote_average}</div>
            <div>revenue :{data.revenue}</div>
            <div>tagline :{data.tagline}</div>
            <div>status :{data.status}</div>
            <div>runtime :{data.runtime} min</div>
            <div>budget :{data.budget} USD</div>
            <div>overview :{data.overview}</div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default IndividualCard;
