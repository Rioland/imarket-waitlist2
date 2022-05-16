const Buttonone = (props) => {
    return ( 
        <div onClick={props.onPress} className="abtbtn ms-auto me-auto text-center animate__animated animate__fadeIn animate__slower" >
           About Us
        </div>
     );
}
 
export default Buttonone;