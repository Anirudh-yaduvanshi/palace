import React from 'react'

import"../../App.css"
import Homeextender from '../Homeextend'
import Lannding from '../Lannding'
import Footer from '../Footer'
import Homeextendmore from "../Homeextendmore";


const Home = () => {
    return (
      <div className="overflow-x-hidden ">
        <Lannding />
        <Homeextender />
        <Homeextendmore />

        <Footer />
      </div>
    );
}

export default Home
