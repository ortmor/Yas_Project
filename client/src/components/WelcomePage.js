// /* eslint-disable */
// import React, { useEffect } from "react";
// import { useNavigate,useLocation } from "react-router-dom";
// import "../styles/WelcomePage.scss";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// const WelcomePage = () => {
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state);

//   const handleRegister = () => {
//     navigate("/registration",{state:location.state});
//   };
//   const location = useLocation();

//   console.log(location,"welcome location");
//   const handleLogin = () => {
//     navigate("/login",{state:location.state});
//   };

//   const userData = user?.details?.email;
//   const code = user?.details?.uniqueCode;
//   const dispatch=useDispatch();

//   const handleLogout = () => {

//     axios.post("/logout",)
//     .then((response) => {
//       if (!response.data.err) {
//         // Clear cookies
//         clearCookies();

//         dispatch({ type: "refresh" });
//         navigate("/thank-you");
//       }
//     });

//   function clearCookies() {
//     const cookies = document.cookie.split("; ");
//     for (const cookie of cookies) {
//       const eqPos = cookie.indexOf("=");
//       const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//       document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
//     }
//   }
// }
//   return (
//     <div className="welcome_main">
//       <div className="welcome_maincontainer">
//         <div className="welcome_logo">
//         <img
//           src="/ADNOC YiS Lockup_NEG.png"
//           alt="Logo"
//           className="welcome_logoone"

//         />
//         </div>
//         <div className="content_container">
//           <div className="content_containerchildone">
//                <h1>WELCOME</h1>
//           </div>
//           <div className="content_containerchildtwo">
//           <h2>VISITOR GUIDE</h2>
//           </div>
//           <div className="content_containerthree">
//             <p>
//             Learn more about our world-class
//             Science, Technology, Engineering
//             and Math (STEM) programs
//             </p>
//           </div>

//         </div>
//         <div className="footer_button">

//           <div className="footer_buttonone">
//             {!user.login ? (
//               <>
//                 <button  onClick={handleRegister}>
//                   <h5>REGISTER</h5>
//                 </button>
//                 <button  onClick={handleLogin}>
//                  <h5>LOGIN</h5>
//                 </button>
//               </>
//             ) :  <button  onClick={handleLogout}>
//             LOGOUT
//           </button>}

//           </div>
//         </div>
//         <div className="welcome_space">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;

/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/WelcomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const WelcomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const [popupContent, setPopupContent] = useState(""); // New state for popup content

  const { user } = useSelector((state) => state);

  useEffect(() => {
    const fromPath = location.state?.from?.pathname;
    if (fromPath) {
      setShowPopup(true);
      switch (fromPath) {
        case "/about-page-details":
          setPopupContent(`
            <h2>Welcome to the ADNOC Yas in Schools Experience Centre.</h2>
            <p>This dedicated education facility at Yas Marina Circuit is used year-round for school visits, holiday camps, teacher training workshops, and program R&D.</p>
            <p>This facility opened in 2023 and is the first of its kind in the world, giving students in the UAE a unique learning experience trackside at Yas Marina Circuit.</p>
          `);
          break;
        case "/about-page-details-2":
          setPopupContent(`
            <h2>Make Zone</h2>
            <p>You are now in the Make Zone which is full of technology for the ADNOC Yas in Schools programs. In this space we have 3D printers, laser cutter, CNC routers, computer suite, vinyl cutters, and a wind tunnel.</p>
          <p>We use this space to host workshops, manufacture F1 in Schools cars, and get kids hands on with design & make projects during our holiday camps.</p>
            `);
          break;
        case "/about-page-details-3":
          setPopupContent(`
            <h2>The Terrain Challenge </h2>
            <p>The terrain challenge is one of the key parts of the 4x4 in Schools program, it challenges students to navigate successfully around the course using the vehicle they design and manufacture at school. Students integrate electronics and develop code to enhance the performance of the vehicle as well as make improvements to the mechanical components such as the suspension and wheels.</p>
          <p>You can have a go at navigating a 4x4 vehicle around the terrain challenge, just ask one of our staff!!</p>
            `);
          break;
        case "/about-page-details-4":
          setPopupContent(`
            <h2>Race Zone</h2>
            <p>You are now in the Race Zone which houses our 25m racetrack used for Formula Ethara and F1 in Schools. This space is mostly used for Formula Ethara race days where schools bring the Formula Ethara cars they have made in school and race them to find out who has the fastest car.</p>
         <p>You can have a go at racing yourself today, just ask one of our staff!</p>
            `);
          break;
        default:
          setShowPopup(false);
      }
    }
  }, [location]);

  const handleRegister = () => {
    navigate("/registration", { state: location.state });
  };

  const handleLogin = () => {
    navigate("/login", { state: location.state });
  };

  const handleLogout = () => {
    axios.post("/logout").then((response) => {
      if (!response.data.err) {
        // Clear cookies
        clearCookies();

        dispatch({ type: "refresh" });
        navigate("/thank-you");
      }
    });

    function clearCookies() {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    }
  };

  return (
    <div className="welcome_main">
      <div className="welcome_maincontainer">
        <div className="welcome_logo">
          <img
            src="/ADNOC YiS Lockup_NEG.png"
            alt="Logo"
            className="welcome_logoone"
          />
        </div>
        <div className="content_container">
          <div className="content_containerchildone">
            <h1>WELCOME</h1>
          </div>
          <div className="content_containerchildtwo">
            <h2>VISITOR GUIDE</h2>
          </div>
          <div className="content_containerthree">
            <p>
              Learn more about our world-class Science, Technology, Engineering
              and Math (STEM) programs
            </p>
          </div>
        </div>
        <div className="footer_button">
          <div className="footer_buttonone">
            {!user.login ? (
              <>
                <button onClick={handleRegister}>
                  <h5>REGISTER</h5>
                </button>
                <button onClick={handleLogin}>
                  <h5>LOGIN</h5>
                </button>
              </>
            ) : (
              <button onClick={handleLogout}>LOGOUT</button>
            )}
          </div>
        </div>
        <div className="welcome_space"></div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={() => setShowPopup(false)}>
              &times;
            </button>
            <div dangerouslySetInnerHTML={{ __html: popupContent }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
