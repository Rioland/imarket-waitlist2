/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";

const Appbar = () => {
  return (
    <nav className=" container pt-4 d-flex mt-2">
      <a
        className="logo text-blue animate__animated animate__fadeIn animate__slow animate__delay-2s"
        href="/"
      >
        <img src="/images/logo1.png" alt="logo" className="logo" />
      </a>
      {/* button */}
      <a
        className="nav-link active ms-auto text-capitalize  animate__animated animate__fadeIn animate__slower "
        aria-current="page"
        href="/join-waitlist"
      >
        <span className="joinwtbtn">Join Waitlist</span>
      </a>
    </nav>
  );
};

export default Appbar;

// const Appbar = (props) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light ">
//       <div className="container">
//         <a className="navbar-brand animate__animated animate__fadeIn animate__slow animate__delay-2s" href="/">
//          <Image src="/images/logo1.png" alt="logo" width="70px" height="50px" />
//         </a>
//         {/* <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation" width="16" height="16" fill="#ffffff" className="bi bi-list navbar-toggler " viewBox="0 0 16 16">
//   <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
// </svg> */}
//         <button
//           className="navbar-toggler bg-light"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active text-capitalize text-center animate__animated animate__fadeIn animate__slower "  aria-current="page" href="/join-waitlist">
//                 <span  className="joinwt">
//                   Join Waitlist
//                 </span>

//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// // };

// export default Appbar;
