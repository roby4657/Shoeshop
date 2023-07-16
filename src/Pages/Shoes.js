import { useNavigate } from "react-router-dom";

function Shoes(props) {
    let navigate = useNavigate();
    return props.shoe.map(function (a, i) {
      return (
        <div className="col-md-4 ">
          <img src={`https://raw.githubusercontent.com/roby4657/db/main/shoes${a.id+1}.jpg`} alt=""
           className="ProductImg"
            style={{ width: "80%" ,height:"70%"} } 
            onClick={()=>{
            navigate(`/detail/${a.id+1}`)
            }
          }
          />
          <h4>{a.title}</h4>
          <p>{a.price}원</p>
        </div>
      );
    });
  }

  export default Shoes;