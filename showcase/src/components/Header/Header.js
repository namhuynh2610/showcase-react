import React from "react";
import './header.css'
import back from '../../assets/back.png'
import Ellipse from "../../assets/Ellipse.png";
export default function Header() {
  return (
    <div className="heading">
       
        <img src={back} className='text-back'/>
      <div>
        <img src={Ellipse} alt="Avatar" className="avatar" />
        <strong className="avatar-name">Pattie Trusdale</strong>
        <p className="avatar-job">Full-stack Developer</p>
      </div>
      <div>
        <button className="button-hire">HIRE</button>
      </div>
    </div>
  );
}
