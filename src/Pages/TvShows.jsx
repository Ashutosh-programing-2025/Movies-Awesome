import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { popShowData } from '../APIs/MainApi'
import { NavLink } from 'react-router-dom'
import { PiCaretDoubleRight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { BiCaretDown } from "react-icons/bi";
import noImg from '../assets/No_Image_Available.jpg'
import { useForm } from 'react-hook-form';


const TvShows = () => {
  const {register,handleSubmit} = useForm()
  const[value,setValue] = useState('The Walking Dead');
  const[page,setPage] = useState(1);
  const[open,setOpen] = useState(0);
  const {data,isLoading} = useQuery({
    queryKey:['tv-shows',value,page],
    queryFn:()=>popShowData(value,page),
    keepPreviousData: true,
    
  })
     function movieSearch(e){
    e && setValue(e.target.value);
    e && console.log(e.target.value);
  }
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
const onsubmit = (data)=>{
  console.log(data)
  setTimeout(()=>{
    setValue(data.search)
  },1000)
}
  return (
     <div>
      <div className="Title text-lg text flex items-center mt-7 flex-wrap max-[550px]:text-sm max-[755px]:flex-col justify-between w-3/5 mb-10 mx-auto text-custom-yellow">
        <div>Tv Shows</div>
        <div onClick={()=>setOpen(1)} className="sorting flex items-center justify-center cursor-pointer z-20">Sort <BiCaretDown /></div>
        {open == 1 && <div onClick={()=>setOpen(0)} className="backdrop absolute top-0 left-0 w-screen h-screen z-10 opacity-25 bg-slate-950"></div>}
        {open ==1 && <div onClick={()=>{setValue('popular'); setOpen(0); setTimeout(()=>console.log(value)),2000}} className="conditional-popup p-2 border rounded-md border-gray-700 text-sm absolute right-1/2 top-32 cursor-pointer hover:bg-slate-700 z-20">Sort by Popularity</div>}
        <div className="search flex gap-2 text-2xl items-center w-auto justify-center border py-2 px-3 border-red-400 rounded-lg">
          <div className="flex items-center justify-center rounded-lg"><CiSearch size={20} className="rounded-lg text-white" /></div>
          <form className="flex justify-center items-center" onSubmit={handleSubmit(onsubmit)}>
          <input
            placeholder="search any tv shows"
            {...register('search')}
            className="rounded-lg text-sm outline-none "
            type="text"
          />
          <button className="btn-1 text-sm" type="submit">submit</button>
          </form>
        </div>
      </div>
    <div className=" flex items-center flex-col justify-center">
                    <div className="spacing-txt w-full mt-5 mb-4 max-w-4xl min-[1132px]:max-w-6xl max-[840px]:max-w-4xl max-[823px]:max-w-xl">
                <div className="heading text-custom-yellow w-full px-4 flex flex-col">
                  <div className="first-letter font-bold text-xl sm:text-2xl md:text-3xl flex relative items-center gap-3">
                    Popular Shows <PiCaretDoubleRight size={20} />
                  </div>
                  <div className="second-letter text-sm sm:text-base md:text-lg text-slate-300">
                    This week's top Shows
                  </div>
                </div>
              </div>
    <div className="home-container grid grid-cols-4 max-[1100px]:grid-cols-3 max-[830px]:grid-cols-2 max-[580px]:grid-cols-1 gap-7 ">
        {
            data?.map((e)=>{
                return(
                    <NavLink key={e.id} to={`/${e.id}`}>
                    <div className="flex flex-col h-96 w-64 items-center gap-2 max-[580px]:w-full bg-custom-header-bg text-white p-3 justify-center shadow-xl shadow-red-600">
                            <img className="h-52 w-40  hover:h-60 hover:w-52 duration-300" src={e.poster_path?`https://image.tmdb.org/t/p/w342${e.poster_path}`:{noImg}} alt={e.name} />
                            <div className="rating flex gap-2 items-center "><FaRegStar className=" text-custom-yellow"/> <p className=" text-white">{e.vote_average}</p></div>
                            <div className="title text-lg bg-custom-header-bg text-white">{e.name}</div>
                    </div>
                    </NavLink>

                )
            })
        }
    </div>
    </div>
        <div className="pagination flex gap-4 items-center justify-center relative w-full mt-9">
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
    </div>
  )
}

export default TvShows
