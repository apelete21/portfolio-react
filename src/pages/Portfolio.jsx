import React, { useState } from 'react'
import Popup from '../components/Popup'
import projectsData from '../data/data'

const Portfolio = () => {

  const [popup, setView] = useState(false)

  function viewPopup() {
    if (popup === true) {
      setView(false)
    } else {
      setView(true)
    }
  }

  return (
    <>
      <div class="portfolio_container">

        <div class="main_contan">

          <div class="portfolio_block">

            {projectsData.map((element, item) => {
              return (
                <>
                  <div class="img_box" key={item}>
                    <img src={element.projectImage} alt="" srcset="" className='w-100' />
                    <button class="primary_btn"
                      onClick={() => viewPopup()}
                    >
                      {element.projectName}
                      <br />
                      <h6>Click to view it</h6>
                    </button>
                    {popup === true && <Popup data={element} hideFunc={viewPopup} />}
                  </div>
                </>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio