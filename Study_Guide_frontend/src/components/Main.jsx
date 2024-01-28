import React from 'react'
import data from "../assets/data.json"
import Video from './video';

const Main = () => {
    // console.log(data);
  return (
    <div className='main_container'>
      {data.map((item, index)=> {
        return (<div className='container'>
          <h1 key={index}>{item.title}</h1>
          <p>{item.desc}</p>
          <Video embedId={item.url}></Video>
        </div>);
      })}
    </div>
  )
}

export default Main