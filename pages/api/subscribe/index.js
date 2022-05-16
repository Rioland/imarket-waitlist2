import Subscribers from "../../../model/subscribe";

export default function handler(req, res) {
  if(req.method==="POST"){
    if (req.body.name && req.body.email) {
      const data = {
        name: req.body.name,
        email: req.body.email,
      };
      Subscribers(data,(e,r)=>{
          if(e){
              res.send({
                  error: true,
                  message: e,
                });
          }else{
              res.send({
                  error: false,
                  message: "success",
                });
          }
      });
    } else {
      res.send({
        error: true,
        message: "all field are required",
      });
    }
  }else{
    res.send({
      error: true,
      message: "use post method",
    });
  }
}
