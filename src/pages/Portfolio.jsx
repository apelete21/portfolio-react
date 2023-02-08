import React, { useContext } from 'react'
import Popup from '../components/Popup'
import { AppContext } from '../contexts/Context'
import projectsData from '../data/data'

const Portfolio = () => {

  const {
    popup,
    togglePopupView,
    itemView,
    setItemView
  } = useContext(AppContext)

  return (
    <>
      <div class="portfolio_container">

        <div class="main_contan">

          <div class="portfolio_block">

            {projectsData.map((element, item) => {
              return (
                <>
                  <div class="img_box" key={item} onClick={() => togglePopupView(item)}>
                    <img src={element.projectImage} alt="" srcset="" className='w-100' />
                    <button class="primary_btn">
                      {element.projectName}
                      <br />
                      <h6>Click to view it</h6>
                    </button>
                  </div>
                </>
              )
            })}

          </div>
        </div>
      </div>
      {popup && <Popup data={projectsData[itemView]} hidePopup={togglePopupView} />}
    </>
  )
}

export default Portfolio