import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "antd";
import BizTicker from "../Components/Ticker";
import ChoosBox from "../Components/ChoosBox";
import ProgressBar from "../Components/ProgressBar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StudyDetails from "../Components/StudyDetails";
import "./Home.css";

const Home = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [data, setData] = useState([]);
  const [studyDetails, setStudyDetails] = useState([]);
  const { id } = useParams();
  //console.log(id);
  // console.log(starCount);

  let history = useHistory();

  function handleClick() {
    history.push("/mainBooks");
  }

  const handelAvailable = (newValue) => {
    //console.log("isAvailable", newValue);
    setIsAvailable(newValue);
  };

  useEffect(() => {
    axios
      .post("/api/getAllShas")
      .then(function (response) {
        setData(response.data);
        //console.log("response.data", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [isAvailable]);

  useEffect(() => {
    axios
      .post("/api/getStudyDetails")
      .then(function (response) {
        setStudyDetails(response.data);
        //console.log("Studydata", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProjectRoot">
      <div className="ProjectHeader ">
        <div className="TickerRoot">
          <div className="header-grid-container">
            <img
              className="item1"
              src="/Images/book.png"
              alt=""
              // onClick={handleClick}
            ></img>

            <div className="item2">חלוקת הש"ס</div>
            <AnchorLink
              offset={() => 250}
              className="item3"
              href="#TextOnProject"
            >
              אודות הפרוייקט
            </AnchorLink>
            <AnchorLink
              offset={() => 250}
              className="item4"
              href="#counter_text"
            >
              מצב נוכחי
            </AnchorLink>
            {/* <div className="item5" onClick={handleClick}>
              הספרים
            </div> */}
            <AnchorLink
              offset={() => 250}
              className="item6"
              href="#ChoiseFlexContainer"
            >
              הצטרף עכשיו
            </AnchorLink>
            {/* <div className="books-phone-view-btn" onClick={handleClick}>
              הספרים
            </div> */}
          </div>
          {/* <BizTicker /> */}
        </div>
      </div>
      <img className="ProjectImg" src="/Images/drukman.jpg" alt=""></img>
      {/* <div className="donate">תרומה</div> */}
      <div className="ProjectDetails">
        {data && (
          <div className="ChoiseFlexContainer" id="ChoiseFlexContainer">
            <img
              className="ChoiseFlexContainerImg"
              src="/Images/backgroundForPhone.jpg"
              alt=""
            ></img>
            <ChoosBox
              chosen="masechet"
              stateBtn={handelAvailable}
              isAvailableBtn={isAvailable}
              data={data}
            />
            <ChoosBox
              chosen="chapter"
              stateBtn={handelAvailable}
              isAvailableBtn={isAvailable}
              data={data}
            />
            <ChoosBox
              chosen="paper"
              stateBtn={handelAvailable}
              isAvailableBtn={isAvailable}
              data={data}
            />
          </div>
        )}
        <div className="progressRoot">
          <ProgressBar data={data} />
        </div>

        <div className="ProjectText">
          <div className="TextOnProject" id="TextOnProject">
            <p className="TextOnProject_P">
              הרב חיים דרוקמן זצ"ל נולד בשנת תרצ"ג בקוטי שבפולין. את ילדותו
              העביר בצל מלחמת העולם השניה תוך שהוא והוריו בורחים ומסתתרים
              מהנאצים. בחודש אב תש"ד הצליח לעלות לארץ ישראל ולאחר סיום המלחמה
              עלו גם הוריו ארצה.<br></br>
              <br></br>
              בנערותו למד בישיבת כפר הרא"ה אצל הרב נריה והרב צוקרמן זצ"ל ולאחר
              שירות צבאי הקים יחד עם חבריו את ישיבת כרם ביבנה ואח"כ עבר ללמוד
              בישיבת מרכז הרב אצל הרב צבי יהודה זצ"ל. בשנת תשכ"ג שלח אותו הרב
              צבי יהודה זצ"ל לעמוד בראשות הישיבה התיכונית "אור עציון" בה למדו
              אצלו רבים מבין אנשי הציבור המשמשים כיום בתפקידי מפתח בציבוריות
              הישראלית. לאחר מכן בשנת תשל"ז הקים הרב דרוקמן זצ"ל את הישיבה
              הגבוהה באור עציון בה שימש כראש הישיבה עד ימיו האחרונים.<br></br>
              <br></br>
              ביום העצמאות תשע"ב קיבל הרב דרוקמן זצ"ל פרס ישראל על מפעל חיים
              ובנימוקי השופטים נכתב: "בכל שנות פעילותו תרם הרב דרוקמן תרומה
              ניכרת וחשובה לקירוב בין חלקי העם מתוך אהבת ישראל אמיתית".
              <br></br>
              <br></br>
              הרב חיים דרוקמן זצ"ל היה רב, מחנך ואיש עשיה ללא לאות למען עם ישראל
              וארץ ישראל. בכל שנותיו חינך דורות על ברכי התורה בשילוב עם עשיה בכל
              תחומי החיים. ביתו וזמנו היו נתונים כולם למען חינוך וגידול של
              תלמידי חכמים המעורבים בעשיה למען הכלל אם בהקמת מכינות וישיבות, אם
              בהקמת מפעל ההתנחלויות ואם בפעילות פרלמנטרית בכנסת.
              <br></br>
              <br></br>
              אנחנו מזמינים אתכם לקחת חלק במיזם סיום הש"ס לעילוי נשמתו של הרב
              חיים דרוקמן זצ"ל.{" "}
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="study-list">
            <StudyDetails studyDetails={studyDetails} />
          </div>
          <div className="all-rights-reserved">
            <p>כל הזכויות שמורות ל- DreamApp</p>
            <p>052-3587990</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
