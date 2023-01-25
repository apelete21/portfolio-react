import React from 'react'
import Bootstrap from '../medias/icons/bootstrap.svg'
import Php from '../medias/icons/php.svg'
import Jsx from '../medias/icons/react.svg'
import Redux from '../medias/icons/redux.svg'
import Git from '../medias/icons/git.svg'
import Figma from '../medias/icons/figma.svg'
import Js from '../medias/icons/js.svg'
import Html5 from '../medias/icons/html5.svg'
import Css3 from '../medias/icons/css3.svg'
import Node from '../medias/icons/node.svg'
import Npm from '../medias/icons/npm.svg'

const Skills = () => {
  return (
    <>
      <div class="skills-bar">
        <div class="bar">
          <div class="info">
            <img src={Jsx} alt="" srcset="" />

          </div>
          <div class="progress-line jsx">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={Redux} alt="" srcset="" />

          </div>
          <div class="progress-line redux">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={Git} alt="" srcset="" />

          </div>
          <div class="progress-line git">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={Figma} alt="" srcset="" />

          </div>
          <div class="progress-line figma">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={Js} alt="" srcset="" />

          </div>
          <div class="progress-line  es6">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={Node} alt="" srcset="" />
              <img src={Npm} alt="" srcset="" />


              </div>
              <div class="progress-line node">
                <span></span>
              </div>
          </div>
          <div class="bar">
            <div class="info">
              <img src={Html5} alt="" srcset=""/>
                <img src={Css3} alt="" srcset=""/>

                </div>
                <div class="progress-line htmlCss">
                  <span></span>
                </div>
            </div>
            <div class="bar">
              <div class="info">
                <img src={Php} alt="" srcset="" />

              </div>
              <div class="progress-line php">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <img src={Bootstrap} alt="" srcset="" />

              </div>
              <div class="progress-line bootstrap">
                <span></span>
              </div>
            </div>
          </div>
      </>
      )
}

      export default Skills