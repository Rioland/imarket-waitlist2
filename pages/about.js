/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import style from "../styles/about.module.css";

import { useRouter } from "next/router";

const Section4=()=>{
    <section className="sec1">
    <div className=" container pt-4">
      <div className="row">
        <div className=" col-lg-6 col-md-6 col-sm-12">
          <p
            className={
              style.p2ph +
              " animate__animated animate__fadeIn animate__slower"
            }
          >
            Automated P2P
          </p>
          <div
            className={
              style.p2ptxt +
              " autop2ptext animate__animated animate__fadeIn animate__slower"
            }
          >
            Peer to Peer (P2P) transactions are usually time-consuming when
            you have to wait for confirmation from the other party involved
            in a transaction.
            <br />
            <br />
            We are eliminating such delays on iMarket. We are out to make
            crypto transactions easier, faster and seamless. With us, you
            get your coins immediately after you make your payment. Within
            the blink of an eye!
          </div>
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-12 mb-auto  mt-auto animate__animated animate__fadeIn animate__slower">
          <img
            src="/images/business-3d-profit1.png"
            alt="profit1"
            className={style.p2pimg}
          />
        </div>
      </div>
    </div>
  </section>
}


const About = () => {
  const router = useRouter();
  return (
    <Fragment>
     
      {/* sec2 */}
      <div className="white-bg mt-2">
        <p className={style.abfisttopic}>What are we up to?</p>
        <div className="container-fluld">
          <div className={style.abflex1}>
            <div className={style.smallscreentext}>
              We are building a home for crypto enthusiasts. A place where you
              can have even more fun with your coins than you already do.
            </div>
            <div className={style.Tleft}>
              We are building a home for crypto enthusiasts. A place where you
              can have even more fun with your coins than you already do.
              <br />
              <br />
              Using iMarket, you can auction and buy coins at your convenience.
              We sort out your crypto transactions with no delays and no wait
              times.
            </div>
            <img
              src="/images/business-3d-close-up-of-black-pondering-businessman-in-blue-suit 1.png"
              alt="businessman"
              className={style.abFimage}
            />
          </div>

          <div className={style.smallscreentext2}>
            Using iMarket, you can auction and buy coins at your convenience. We
            sort out your crypto transactions with no delays and no wait times.
          </div>
        </div>
      </div>
      {/* sec3 */}

      <p className={style.fft}>You can do more with your coins</p>
      <div className={style.fftFlex}>
        <img
          src="/images/business-3d-looking-for-bitcoins-1 1.png"
          alt="looking"
          className={style.looking}
        />
        <div className={style.fit}>
          <br />
          You can now book and pay for your favourite concerts and events on
          iMarket.
          <br />
          <br />
          So, you bought a ticket to that concert you really wanted to go to,
          but something came up and you can’t make it anymore.
          <br />
          <br />
          No problem! You can now re-sell your ticket on iMarket!
        </div>

        <div className={style.fit2}>
          You can now book and pay for your favourite concerts and events on
          iMarket.
          <br />
          <br />
          So, you bought a ticket to that concert you really wanted to go to,
          but something came up and you can’t make it anymore.
        </div>
      </div>
      <div className={style.fit3}>
        No problem! You can now re-sell your ticket on iMarket!
      </div>
      {/* section 4 */}
       <Section4/>
      {/* sec5 */}
      <div className=" container-fluid ">
        <div
          className={
            style.move +
            " text-start text-capitalize ms-auto me-auto pt-2 animate__animated animate__fadeIn animate__slower"
          }
        >
          We are changing how your money moves
        </div>
        <div className=" container">
          <div className="d-flex">
            <div className="mt-auto animate__animated animate__fadeIn animate__slower">
              <img
                alt="analytics1"
                src="/images/business-3d-business-analytics1.png"
                className={style.tfimage}
              />
            </div>

            <div className={style.tftl+ " animate__animated animate__fadeIn animate__slower "}>
            <br/>
            <br/>
              <h3> Your money, your rules!</h3>
              <br/>
              <br/>
              
                Now you don’t have to bother about being intercepted by bank
                restrictions. Once you have your crypto coins or fiat in your
                iMarket E-wallet, you can automatically make payments and
                transactions without any hitches.
             
            </div>
          </div>
        </div>
      </div>
      {/* sect 6 */}
      <section className="sec1">
        <div className=" p-3 pb-4">
          <div className={style.ablbg}>
            <div className="d-flex ">
              <div className="container animate__animated animate__fadeIn animate__slower pt-4 ps-4 ">
               <p className={style.gh}>There’s more where this came from!</p>
               <p className={style.tp} >
               We are holding back some pretty amazing features for when we launch. We can't wait to show them off!
               </p>

              </div>
              <div className=" pt-5 pe-4">
                <img
                  src="/images/business-3d-sale1.png"
                  alt="sale1"
                  className={style.sale1Image+" img-fluid animate__animated animate__fadeIn animate__slower me-3"}
                />
              </div>
            </div>
            <div  onClick={()=>router.push("/")} className={style.knowBtn +" ms-auto me-auto"}>
                Get in the Know
            </div>
            <br/>
            <br/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
