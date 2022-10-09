import React from 'react'
import "./styles.css";
import data from "../../Resources/data.json"

function fidndmatches(wordtoatch, items){
  return items.filter(ddata => {
    const regex = new RegExp(wordtoatch, "gi");
  })
}

function Searchpager() {
  let dataurl = "../../Resources/data.json";
  console.log(dataurl);
  let items = [];
  let filteredItems = [];
  let fliteredHtml = [];
  console.log(data)
  items = data;


  
  console.log(items);

  return (
    <>
        <div className="searchpager">
            <form className="search">
                <p>search</p>
                <input type="text" name="search" id="search" />
            </form>
            <div className="suggestions-tab">
              <p>suggestion</p>
              <ul className='suggestions'>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
              </ul>
            </div>
        </div>
    </>
  )
  
}

export default Searchpager