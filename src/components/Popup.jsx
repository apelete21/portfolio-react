import React from 'react'
import Close from '../medias/icons/close.svg'

const Popup = ({data, hidePopup}) => {
    return (
        <div className='project-view-bg vh-100 vw-100 popup-bg'>
            <div className="click-to-close vh-100 vw-100" onClick={() => hidePopup()}></div>
            <div className='project-view dflex align-center'>
                <div className="closeBtn dflex" onClick={() => hidePopup()}>
                    <img src={Close} alt="btn close" className='h-100' />
                </div>
                <div className="project-details justify-between dgrid">
                    <div className="project-img">
                        <img src={data.projectImage} alt="project img" className='h-100 w-100' />
                    </div>
                    <div className="project-info dgrid">

                        <h2 className="project-name">
                            {data.projectName}
                        </h2>
                        <br />
                        <div className="project-description">
                            <h3><b>Description:</b></h3>
                            <br />
                            <p>{data.description}</p>
                        </div>
                        <br />
                        <div className="project-tools">
                            <h3><b>Tools:</b></h3>
                            <br />
                            <p> {data.tools} </p>
                        </div>


                        <a href={data.link} target="_blank" className='visitLink' rel="noopener noreferrer">
                            <button className='visitBtn'>
                                Visit the site
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup