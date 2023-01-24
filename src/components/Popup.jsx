import React from 'react'
import Close from '../medias/icons/close.svg'
import ProjectImg from '../medias/pictures/work2.png'

const Popup = () => {
    return (
        <div className='project-view-bg vh-100 vw-100 popup-bg'>
            <div className='project-view dflex align-center'>
                <div className="closeBtn dflex">
                    <img src={Close} alt="btn close" className='h-100' />
                </div>
                <div className="project-details dgrid">
                    <div className="project-img">
                        <img src={ProjectImg} alt="project img" className='h-100 w-100' />
                    </div>
                    <div className="project-info dgrid">

                        <h3 className="project-name">
                            Spotify clone web app
                        </h3>
                        <div className="project-description">
                            <h4>Description:</h4>
                            <p>A simple spotify clone version that have best features of the original and others. It is built essentially with NextJs framework with Google Login integration.</p>
                        </div>
                        <div className="project-tools">
                            <h4>Tools:</h4>
                            <p>Figma, ReactJs, NextJS, MongoDB, Styled Components, </p>
                        </div>


                        <a href="#blocked" target="_blank" className='visitLink' rel="noopener noreferrer">
                            <button className='visitBtn'>
                                Visit
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup