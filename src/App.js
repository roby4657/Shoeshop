import { useState, useRef, useEffect } from "react";
import "./App.css";
import { data, Detail } from "./Pages/Detail.js";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cart from "./Pages/Cart.js";
import Shoes from "./Pages/Shoes.js";
import {
  FiSearch,
  FiLogIn,
  FiUserCheck,
  FiShoppingCart,
  FiHelpCircle,
} from "react-icons/fi";
import Login from "./Pages/Login";
import ImageSlide from "./Pages/ImageSlide";
import SearchResult from "./Pages/SearchResult";
import Join from "./Pages/Join";

function App() {
  const [shoe, setShoe] = useState(data);
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const [click, setClick] = useState(2);
  const watchedItem = JSON.parse(localStorage.getItem("watched"));
  if (watchedItem === null) {
    localStorage.setItem("watched", JSON.stringify([]));
  }
  const location = useLocation();
  const searchresult = useRef(null);
  const searchvalue = useRef(null);

  function Watched() {
    //localStorage에 있는 데이터를 가져온 후 3개까지만 보여주기.

    const watchedList = [];
    const watchedData = JSON.parse(localStorage.getItem("watched"));

    for (let i = 0; i < 3; i++) {
      if (watchedData[i] === undefined) {
      } else {
        watchedList.push(
          <li>
            <img
              src={`https://raw.githubusercontent.com/roby4657/db/main/shoes${
                watchedData[i] + 1
              }.jpg`}
              alt=""
              onClick={() => {
                navigate(`/detail/${watchedData[i] + 1}`);
              }}
            />
          </li>
        );
      }
    }
    return watchedList;
  }

  return (
    <div className="App">
      <div className="navigation-wrap">
        <div className="navigation-bar">
          <div
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          ></div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              ref={searchvalue}
              onInput={(e) => {
                if (e.currentTarget.value === "") {
                  setSearch([]);
                } else {
                  setSearch(
                    shoe.filter((item) => {
                      if (
                        item.title
                          .toLowerCase()
                          .includes(e.currentTarget.value.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                  );
                }
              }}
              onClick={(event) => {
                let target = event.currentTarget;
                const addSearchWindow = (e) => {
                  if (e.target !== target) {
                    searchresult.current.classList.remove("show");
                    document.removeEventListener("click", addSearchWindow);
                  }
                };

                searchresult.current.classList.add("show");
                document.addEventListener("click", addSearchWindow);
              }}
            />
            <FiSearch className="search-icon" size={25} />
          </div>

          <div className="util-list">
            <ul>
              <li
                onClick={() => {
                  navigate("/login");
                }}
              >
                <FiLogIn size={35} />
                <div>Login</div>
              </li>
              <li
                onClick={() => {
                  navigate("/join");
                }}
              >
                <FiUserCheck size={35} />
                <div>Join</div>
              </li>
              <li
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <FiShoppingCart size={35} />
                <div>&nbsp;Cart</div>
              </li>
              <li>
                <FiHelpCircle size={35} />
                <div>Help</div>
              </li>
            </ul>
          </div>
          <div className="search-result" ref={searchresult}>
            <div>
              <button
                style={{ position: "relative", left: "440px" }}
                onClick={() => {
                  searchresult.current.classList.remove("show");
                }}
              >
                X
              </button>
            </div>

            <div className="SearchResultBox">
              <SearchResult search={search} />
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-menu"></div>
      {location.pathname === "/" ? <ImageSlide /> : null}

      <div className="watchedBox">
        <div className="watched"> 최근 본 상품{Watched()} </div>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div>
              <button
                onClick={() => {
                  let shoe2 = [...shoe].sort((a, b) => {
                    if (a.title > b.title) return 1;
                    if (a.title < b.title) return -1;
                    return 0;
                  });
                  setShoe(shoe2);
                }}
              >
                가나다순 정렬
              </button>
              <div className="container">
                <div className="row">
                  <Shoes shoe={shoe}></Shoes>
                </div>
              </div>
              <button
                onClick={() => {
                  setClick(click + 1);
                  axios
                    .get(
                      `https://raw.githubusercontent.com/roby4657/db/main/db${click}.json`
                    )
                    .then((data) => {
                      let shoe2 = [...shoe, ...data.data];
                      setShoe(shoe2);
                    })
                    .catch(() => {
                      alert("마지막 상품입니다.");
                    });
                }}
              >
                상품 더보기
              </button>
            </div>
          }
        ></Route>

        <Route
          path="/detail/:id"
          element={<Detail shoe={shoe}></Detail>}
        ></Route>

        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
      <div className="footer">
        <img src="logo.png" width={150} />
        CSCENTER 010-4028-4657 <br />
        운영시간 : 10:00 - 17:00 (주말/공휴일 휴무) <br />
        점심시간 : 11:50 - 13:00 <br />
        반품주소 : 경기도 성남시 수정구 수정로 319
      </div>
    </div>
  );
}

export default App;
