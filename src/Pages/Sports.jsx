import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getApiData, getApiData2 } from "../APIs/MainApi";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiCaretDoubleRight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState("avengers");
  const [value2, setValue2] = useState("justice league");
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const { data: data1, isLoading } = useQuery({
    queryKey: ["movies", value, page],
    queryFn: () => getApiData(value, page),
    keepPreviousData: true,
  });
  const { data: data2 } = useQuery({
    queryKey: ["movie", value2, page2],
    queryFn: () => getApiData(value2, page2),
    keepPreviousData: true,
  });

  if (isLoading)
    return (
      <div
        id="loading-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60"
      >
        <svg
          className="animate-spin h-8 w-8 text-white mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <span className="text-white text-3xl font-bold">Loading...</span>
      </div>
    );
  const onsubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      setValue(data.search);
    }, 1000);
  };

  return (
    <div className="bg-black text-white max-[1099px]:px-10">
      <div className="spacing-txt w-full mt-7 mb-10 flex justify-center">
        <div className="Title text-lg text  flex items-center flex-wrap max-[550px]:text-sm max-[550px]: justify-between w-5/6 max-[1275px]:w-full max-[1099px]:w-full text-custom-yellow">
          <div>Movies</div>
          <div className="search flex gap-2 text-2xl items-center w-auto justify-center border py-2 px-3 border-red-400 rounded-lg">
            <div className="flex items-center justify-center rounded-lg">
              <CiSearch size={20} className="rounded-lg text-white" />
            </div>
            <form
              className="flex justify-center items-center"
              onSubmit={handleSubmit(onsubmit)}
            >
              <input
                placeholder="search any movie"
                {...register("search")}
                className="rounded-lg text-sm outline-none "
                type="text"
              />
              <button className="btn-1 text-sm" type="submit">
                search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" flex items-center flex-col justify-center">
        <div className="spacing-txt w-full mb-4 max-w-4xl min-[1132px]:max-w-6xl max-[840px]:max-w-4xl max-[823px]:max-w-xl">
          <div className="heading text-custom-yellow w-full px-4 flex flex-col">
            <div className="first-letter font-bold text-xl sm:text-2xl md:text-3xl flex relative items-center gap-3">
              Popular Interests <PiCaretDoubleRight size={20} />
            </div>
            <div className="second-letter text-sm sm:text-base md:text-lg text-slate-300">
              This week's top Movies
            </div>
          </div>
        </div>
        <div className="home-container grid grid-cols-4 max-[1136px]:grid-cols-3 max-[890px]:grid-cols-2 max-[607px]:grid-cols-1 gap-7 ">
          {data1?.map((e) => {
            return (
              <NavLink key={e.id} to={`/${e.id}`}>
                <div className="flex flex-col h-96 w-64 items-center overflow-hidden bg-custom-header-bg rounded-md hover:overflow-hidden duration-300 gap-2 max-[607px]:w-full p-3 justify-center shadow-xl shadow-red-600">
                  <img
                    className="h-52 w-40 sm:hover:h-60 sm:hover:w-52 duration-300"
                    src={`https://image.tmdb.org/t/p/w342${e.poster_path}`}
                    alt="no photos"
                  />
                  <div className="rating flex gap-2 items-center ">
                    <FaRegStar className=" text-custom-yellow" />{" "}
                    <p className=" text-white">{e.vote_average}</p>
                  </div>
                  <div className="title text-lg text-ellipsis text-center bg-custom-header-bg ">
                    {e.original_title}
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="pagination flex gap-4 items-center relative w-4/6 mt-9">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={`w-8 h-8 p-2 bg-custom-header-bg ${
              page == 0 && "opacity-25"
            } flex items-center hover:bg-slate-800 justify-center text-white rounded-md`}
          >
            -
          </button>
          <div className="value text-white text-sm">{page}</div>
          <button
            onClick={() => setPage(page + 1)}
            className="w-8 h-8 p-2 bg-custom-header-bg flex hover:bg-slate-800 items-center justify-center text-white rounded-md"
          >
            +
          </button>
        </div>
        <div className="spacing-txt w-full mt-24 mb-4 max-w-4xl min-[1132px]:max-w-6xl max-[840px]:max-w-4xl max-[823px]:max-w-xl">
          <div className="heading text-custom-yellow w-full px-4 flex flex-col">
            <div className="first-letter font-bold text-xl sm:text-2xl md:text-3xl flex relative items-center gap-3">
              Popular Movies <PiCaretDoubleRight size={20} />
            </div>
            <div className="second-letter text-sm sm:text-base md:text-lg text-slate-300">
              This week's top Movies
            </div>
          </div>
        </div>
        <div className="home-container2 grid grid-cols-4 max-[1100px]:grid-cols-3 max-[830px]:grid-cols-2 max-[580px]:grid-cols-1 gap-7 ">
          {data2 &&
            data2.map((e) => {
              return (
                <NavLink key={e.id} to={`/${e.id}`}>
                  <div className="flex flex-col h-96 w-64 items-center overflow-hidden bg-custom-header-bg rounded-md hover:overflow-hidden hover:absolute duration-300 gap-2 max-[580px]:w-full p-3 justify-center shadow-xl shadow-red-600">
                    <img
                      className="h-52 w-40 hover:h-60 hover:w-52 duration-300"
                      src={`https://image.tmdb.org/t/p/w342${e.poster_path}`}
                      alt="no photos"
                    />
                    <div className="rating flex gap-2 items-center ">
                      <FaRegStar className=" text-custom-yellow" />{" "}
                      <p className=" text-white">{e.vote_average}</p>
                    </div>
                    <div className="title text-lg text-ellipsis text-center bg-custom-header-bg ">
                      {e.original_title}
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;