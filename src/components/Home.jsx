import React from 'react'
import { FaCommentDollar, FaVideo } from 'react-icons/fa'
import Heading from '../util/Heading'
import Slider from '../util/Slider'
const threeLinks = [
  {
    icon: <FaVideo />,
    title: 'Create a Video',
    desc: 'Engage your audience with lifelike AI Avatar videos'

  },

  {
    icon: <FaCommentDollar />,
    title: 'Create a Agent',
    desc: 'Train a convensational Agent your users will love'

  },

]
const Home = () => {
  return (
    <>
          <h1>Get Started</h1>
          <div className='container-fluid'>
            <div className='row d-flex gap-4 align-left'>
          {threeLinks.map((content) =>
          {
            return (
              <div className='col-md-4 rounded border border-success'>
                <Heading icon={content.icon} title={content.title} desc={content.desc} />  
              </div>
            )
          } 
          )}
        </div>
        <div className='row my-4'>
          <div className='col-md-12 my-4'>
            <h3 className=''>Tutorial</h3>
          </div>

          <div className="container mt-5">
            <Slider />
          </div>


        </div>
        
        </div>
    </>
  )
}

export default Home
