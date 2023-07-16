import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./../App.css";
import { useDispatch } from "react-redux";
import { addCart } from "../store.js";

let data = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
  },
];

function Detail(props) {
  let { id } = useParams();
  let [탭, 탭변경] = useState(0);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();


  let para = props.shoe.find((ele) => ele.id === parseInt(id - 1));

  useEffect(() => {
    setFade("end");
    let watchedList = JSON.parse(localStorage.getItem("watched"));
    watchedList.unshift(para.id);
    watchedList = [...new Set(watchedList)];
    localStorage.setItem("watched", JSON.stringify(watchedList));
  }, []);

  return (
    <div className={`start ${fade}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={"https://raw.githubusercontent.com/roby4657/db/main/shoes" + id + ".jpg"}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{para.title}</h4>
            <p>{para.content}</p>
            <p>{(para.price).toLocaleString()}원</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addCart({ id: para.id, name: para.title, count: 1,price: para.price }));
                if(window.confirm(`상품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?`))
                navigate('/Cart')                
                              }}
            >
              장바구니에 담기
            </button>
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item className="abc">
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            상품 정보
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            상품 후기
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} 탭변경={탭변경} shoe={props.shoe} />
    </div>
  );
}

function TabContent(props) {
  if (props.탭 == 0) {
    return <div>{props.shoe[0].title}</div>;
  } else if (props.탭 == 1) {
    return <div>내용2</div>;
  } else if (props.탭 == 2) {
    return <div>내용3</div>;
  }
}

export { data, Detail };
