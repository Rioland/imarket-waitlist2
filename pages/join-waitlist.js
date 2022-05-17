/* eslint-disable @next/next/no-img-element */

import { Fragment } from "react";
import { useState } from "react";
const axios = require('axios').default;

import { useRouter } from "next/router";
const JoinWaitList = () => {
  // function subClick(e){
  //   if(email&& name){
  //     console.log(email, name);
  //   }else{
  //      ("please fill the forms")
  //   }
  // }
  return (
    <Fragment>
      
      <Section2 />
      
    </Fragment>
  );
};

export default JoinWaitList;

const Section2 = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const route=useRouter()
  return (
    <section className=" container mt-4 mb-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 me-auto ms-auto animate__animated animate__fadeInLeft animate__slower ">
          <p className=" container joinlist display-1 text-wrap text-start w-100 ">
            Get to Know
            <br /> When We
            <br /> Launch!
          </p>
        </div>
        <div className="container col-lg-6 col-md-6 col-sm-12  ">
       <center>   <img
            alt="business"
            className="bussimage  animate__animated animate__fadeInRight animate__slower animate__delay-1s"
            src="/images/business-3d-2902.png"
          /></center>
          <form id="submit">
          <div className="curvinput mb-3 ms-auto me-auto animate__animated animate__fadeInRight animate__slower animate__delay-2s">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Firstname"
              className="input"
            />
          </div>
          <div className="curvinput mb-3 ms-auto me-auto animate__animated animate__fadeInRight animate__slower animate__delay-3s">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
            />
          </div>
          <div type="submit" className="otpbtn ms-auto me-auto animate__animated animate__fadeInRight animate__slower animate__delay-1s">
            <span
              className="getNottext "
              onClick={(e) => {
                if (email && name) {
                  axios({
                    url:"/api/subscribe",
                    method:"POST",
                    data:{
                      name:name,
                      email:email
                    }
                  }).then((response)=>{
                    if(response.data.error===true){
                      console.log(response.data.message)
                      alert(response.data.message)
                    }else{
                     route.push("/success")

                    }
                  }).catch((e)=>console.log(e))
                } else {
                  alert("please fill the forms");
                }
              }}
            >
              {" "}
              Get Notified
            </span>
          </div>
          </form>
        </div>
        
      </div>
    </section>
  );
};
