import React, { useState } from "react";
import background1 from "../../assets/background1.jpg";
import background2 from "../../assets/background2.jpg";
import background3 from "../../assets/background3.jpg";
import zoom from "../../assets/large.png";
import edit from "../../assets/edit-btn.svg";
import "./content.css";

export default function Content() {
  const [hidden, setHidden] = useState(false);
  const displayBlock = () => {
    setHidden(!hidden);
  };

  const displayNone = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      {/* Header content*/}
      <div className="header">
        <h1 className="header-name" id="header-name">
          Gembucket
        </h1>
        <img src={edit} className="header-icon" onClick={displayBlock}></img>
      </div>
      <div>
        <div className="hashtag" id="wrapperHashtag">
          <strong className="wrapper-hashtag-item">#solar_breeze</strong>
          <strong className="wrapper-hashtag-item">#red_hold</strong>
          <strong className="wrapper-hashtag-item">#card_guard</strong>
          <strong className="wrapper-hashtag-item">#lostring</strong>
          <strong className="wrapper-hashtag-item">#tough_joy_fax</strong>
          <strong className="wrapper-hashtag-item">#cardify</strong>
        </div>
        <div>
          <p className="content" id="contentSummary">
            Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus
            aliquet at neque aenean auctor gravida sem praesent id massa id nisl
            venenatis lacinia aenean sit amet justo morbi ut odio feugiat non
            pretium quis lectus suspendisse.
          </p>
          <p className="content-link">
            Official site:
            <a href="#" className="gembuket-link">
              https://gembucket.com
            </a>
          </p>
        </div>
      </div>

      {/* Modal header content */}
        <div className={hidden ? "myModal" : "hidden"} id="modalContent">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title">Project</p>
            </div>
            <div className="modal-body">
              <div>
                <p className="modal-name">
                  Name <span className="star">*</span>
                </p>
                <input
                  type="text"
                  className="modal-input"
                  value="Gembucket"
                  id="inputHeaderName"
                />
              </div>
              <div className="modal-keywords">
                <p className="keywords">Keywords</p>
                <input
                  type="text"
                  className="modal-input"
                  id="inputHashtag"
                  value=""
                />
                <div className="modal-hashtag" id="modalHashtag">
                  <strong className="modal-hashtag-item">
                    #solar_breeze<span className="close-item">&times;</span>
                  </strong>
                  <strong className="modal-hashtag-item">
                    #red_hold<span className="close-item">&times;</span>
                  </strong>
                  <strong className="modal-hashtag-item">
                    #card_guard<span className="close-item">&times;</span>
                  </strong>
                  <strong className="modal-hashtag-item">
                    #lostring<span className="close-item">&times;</span>
                  </strong>
                  <strong className="modal-hashtag-item">
                    #tough_joy_fax<span className="close-item">&times;</span>
                  </strong>
                  <strong className="modal-hashtag-item">
                    #cardify<span className="close-item">&times;</span>
                  </strong>
                </div>
              </div>
              <div>
                <p className="modal-summary">
                  Summary <span className="star">*</span>
                </p>
                <textarea
                  className="modal-summary-textarea"
                  id="inputSummary"
                  rows='10'
                  column='20'
                  value="Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purusaliquet at neque aenean auctor gravida sem praesent id massaid nisl venenatis lacinia aenean sit amet justo morbi ut odiofeugiat non pretium quis lectus suspendisse."
                >                  
                </textarea>
                <span className="length-summary-textarea">230/250</span>
              </div>
              <div>
                <p className="modal-websites">Websites</p>
                <input
                  type="text"
                  className="modal-websites-input"
                  value="https://gembucket.com"
                />
                <select className="modal-websites-select">
                  <option className="select-option">Official site</option>
                  <option className="select-option">Fake site</option>
                  <option className="select-option">Copy site</option>
                </select>
                <button className="modal-websites-remove">Remove</button>
              </div>
              <br />
              <div>
                <button className="modal-button-add">
                  <strong>Add another website</strong>
                </button>
              </div>
              <div className="modal-footer">
                <button
                  className={
                    hidden ? "btn btn-default" : "btn btn-default hidden"
                  }
                  id="modal-cancel-project"
                  onClick={displayNone}
                >
                  Cancel
                </button>
                <button
                  className={
                    hidden ? "btn btn-primary" : "btn btn-primary hidden"
                  }
                  id="modal-save-project"
                  onClick={displayNone}
                >
                  Save
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div class="slider">
        <div class="slider-img">
          <input type="radio" name="slider-input" id="img1" />
          <input type="radio" name="slider-input" id="img2" />
          <input type="radio" name="slider-input" id="img3" />
          <input type="radio" name="slider-input" id="img4" />

          <img src={background1} alt="img1" class="slider-image1" />
          <img src={background2} alt="img2" class="slider-image2" />
          <img src={background3} alt="img3" class="slider-image3" />

          <img src={zoom} className="zoom-icon" />
          {/* <i class="fas fa-search-plus zoom-icon"></i> */}
        </div>
        <div class="slider-label">
          <label for="img1"></label>
          <label for="img2"></label>
          <label for="img3"></label>
        </div>
      </div>
    </div>
  );
}
