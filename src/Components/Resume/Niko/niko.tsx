import { useEffect } from "react"
import { FaIntercom, FaPhone, FaMapMarked } from "react-icons/fa"
import { Resume, Clone } from "../Resume"
import './niko.scss'
export const Niko = ({edit}:{edit:boolean})=>{
    useEffect(()=>{
  // window.addEventListener('load',()=> {
   ( document.querySelector('#resume.resume-buillder-template') as HTMLElement).style.background ='rgb(246, 246, 246)'
  // })
    },[])
    return(
      <Resume>
        <div className="niko">
          <div className="head">
            <div className="contact">
              <h2 className="title" >Contact Me.</h2>
              <div className="contacts">
  
                <div className="con">
                  <div className="icon">
                    <FaIntercom color='#fff' />
                  </div>
  
                  <div className="info">
                    <h5 className="title" ><small>WEB:</small></h5>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >www.satya.dev#about-me</p>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >www.github.com/spradhan860</p>
                  </div>
                </div>
                <div className="con">
                  <div className="icon">
                    <FaPhone color="#fff" />
                  </div>
  
                  <div className="info">
                    <h5 className="title" ><small>PHONE:</small></h5>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >+234 708 521 8197</p>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >+234 704 989 4034</p>
                  </div>
                </div>
                <div className="con">
                  <div className="icon">
                    <FaMapMarked color="#fff" />
                  </div>
  
                  <div className="info">
                    <h5 className="title" ><small>ADDRESS:</small></h5>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >NO 34, Laughter Estate, Airport Road, Abuja Nigeria.</p>
                  </div>
                </div>
                
              </div>
            </div>
  
  
            <div className="about">
            <h2 className="title">about.</h2>
        <div className="about-intro">
        <div className="">
        <h1>
            <p  data-editable={edit} contentEditable={edit}>SATYABRATA PRADHAN</p>
            <p  data-editable={edit} contentEditable={edit}>WEB DESIGNER</p>
          </h1>
        </div>
  
        <div className=""  data-editable={edit} contentEditable={edit}>
         <div className="small">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea fuga possimus voluptatem quo doloribus sequi repellat corporis veritatis soluta nihil libero voluptatum cum ut deleniti ipsa, enim, neque in. Est quo eum consequuntur temporibus aliquam?
         </div>
        </div>
  
        </div>
            </div>
          </div>
  
  
  <div className="middle">
  
   <h2 className="title">WORK SKILS</h2>
  
  <div className="head">
    
  <div className="work-skills">
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>FIGMA</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>TYPESCRIPT</p>
    <p><span  data-editable={edit} contentEditable={edit}>70</span>%</p>
  </div>
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  </div>
  
   
  <div className="work-skills ">
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  </div>
  
    
  </div>
  
  
  </div>
  
  
  
          <div className="body">
  
      <div className="experience">
        <h2 className="title">EXPERIENCES</h2>
        <div className="exp">
  
  <Clone edit={edit}>
  <div className="xp">
        <h3>Graphics Designer</h3>
        <p className='small'>2021</p>
        <h5>Envato</h5>
        <small className='small'>- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, vel cumque.</small>
      </div>
  
  </Clone>
  
        </div>
      </div>
  
  
      <div className="education">
      <h2 className="title">EDUCATION</h2>
      <div className="edu">
  
  <Clone edit={edit}>
    
  <div className="ed">
          <h4>COURSE NAME</h4>
          <p className='small'>2019 - 2022</p>
          <h5>SCHOOL OF ART</h5>
          <small className='small'>Bachelor of Science in Computer Science & information Science</small>
          <hr />
        </div>
  
  </Clone>
        
      </div>
  
  
      <div className="interests">
        <h2 className="title">INTERESTS</h2>
        <div className="int small" data-editable={edit} contentEditable>
        <li>
        Snowboarding, swimming, traveling,
  reading, hiking
        </li>
        </div>
      </div>
  
  
      <div className="extra"  data-editable={edit} contentEditable>
        <h2 className="title">Projects</h2>
        <div className="int small">
        <h3>Resume Builder</h3>
        
          <small className='small'>Web app built with React,Typescript for creating resume easily with different templates and export to pdf easily</small>
         
        </div>
      </div>
  
      </div>
  
          </div>
        </div>
      </Resume>
    )}
  
