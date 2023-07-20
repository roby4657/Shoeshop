import { useNavigate } from "react-router-dom";

function SearchResult(props) {
    let navigate = useNavigate();
    return props.search.map(function (a, i) {
      return (
       
        
            <div style={{flexBasis:'33.33%',textAlign:'center'}}>
          <img src={`https://raw.githubusercontent.com/roby4657/db/main/shoes${a.id+1}.jpg`} alt=""
           className="ProductImg"
            style={{ width: "70%" ,height:"70%"} } 
            onClick={()=>{
            navigate(`/detail/${a.id+1}`)
            }
          }
          />
          <h6>{a.title}</h6>
          <p>{a.price.toLocaleString()}원</p>
          </div>
        
       
      );
    });
  }

  export default SearchResult;