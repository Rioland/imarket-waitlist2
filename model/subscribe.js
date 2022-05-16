import dbConn from "../config/dbConnect"
const Subscribers =(data,cb)=>{
    const q="INSERT INTO `subscribers`( `name`, `email`) VALUES (?,?)";
    dbConn.query(q,[data.name,data.email],(e,r)=>{
        if(e){
            cb(e.message,null)
        }else{
            cb(null,"success")
        }
    })
}
export default Subscribers;