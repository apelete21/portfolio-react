import React from 'react'
import Close from '../medias/icons/close.svg'

const Popup = ({data, hideFunc}) => {
    return (
        <div className='project-view-bg vh-100 vw-100 popup-bg'
            onClick={() => hideFunc()}
        >
            <div className='project-view dflex align-center'>
                <div className="closeBtn dflex" onClick={() => hideFunc()}>
                    <img src={Close} alt="btn close" className='h-100' />
                </div>
                <div className="project-details justify-between dgrid">
                    <div className="project-img">
                        <img src={data.projectImage} alt="project img" className='h-100 w-100' />
                    </div>
                    <div className="project-info dgrid">

                        <h3 className="project-name">
                            {data.projectName}
                        </h3>
                        <div className="project-description">
                            <h5>Description:</h5>
                            <h6>{data.description}</h6>
                        </div>
                        <div className="project-tools">
                            <h5>Tools:</h5>
                            <h6> {data.tools} </h6>
                        </div>


                        <a href={data.link} target="_blank" className='visitLink' rel="noopener noreferrer">
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