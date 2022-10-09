import React from 'react'
import Header from '../../Components/Header';
import Searchpager from '../../Components/Search-pager';
import Companyprofile from '../Companyprofile';
import Compareprofile from '../Compareprofile';
import './styles.css';


function Homepage() {
  return (
    <div>
        <div className="homepage">
          <Header/>
          <div className="content">
            <Searchpager/>
          </div>
        </div>
    </div>
  )
}

export default Homepage