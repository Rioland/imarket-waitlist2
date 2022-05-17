/* eslint-disable @next/next/no-img-element */

import { Fragment } from "react";

import { RWebShare } from "react-web-share";
const Success = () => {
  const styles = {
    height: "100%",
  };
  return (
    <Fragment>
     
      <Section2 />
      <br/>
   
    </Fragment>
  );
};

export default Success;

const Section2 = () => {
  return (
    <section className=" container mt-4 mb-5 ">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12 me-auto ">
          <p className="container joinlist display-1 text-wrap text-start w-100">
            Awesome!<br/> We are glad to haveyou on board with us
          </p>
        </div>
        <div className=" col-lg-4 col-md-6 col-sm-12 ms-auto">
          <img
            alt="business"
            className="businesswoman  me-auto w-100 img-fluid "
            src="/images/business-3d-close-up-of-businesswoman-in-blue-suit-showing-thumbs-up 1.png"
          />
          {/* <div className="curvinput mb-3 ms-auto me-auto">
            <input type="text" placeholder="Firstname" className="input" />
          </div>
          <div className="curvinput mb-3 ms-auto me-auto">
            <input type="text" placeholder="Email" className="input" />
          </div>
          <div className="otpbtn ms-auto me-auto">
            <span className="getNottext pt-5"> Get Notified</span>
          </div> */}
        </div>
      </div>
      <div>
        <p className="ctext" >
        If you love us, tell someone about us?
        </p>
        {/*  */}
        
     
          <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url:process.env.url,
          title: "iMarket",
        }}
        onClick={() => console.log("shared successfully!")}
      >
           <div type="submit" className="otpbtn ms-auto me-auto animate__animated animate__fadeInRight animate__slower animate__delay-1s">
            <span className="getNottext pt-5">
              Get Notified
            </span>
          </div>
      </RWebShare>
    </div>

      </div>
    </section>
  );
};
