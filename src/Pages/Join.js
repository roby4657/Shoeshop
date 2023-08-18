import { useRef } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import Postcode from "./Post";

const Join = () => {
  const pw = useRef(null);
  const pwcheck = useRef(null);
  const phcheck = useRef(null);
  const postaddress = useRef(null);
  return (
    <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <div className="PageWrap">
        <div className="PageBox Join">
          <div className="PageTitle">회원 가입</div>

          <div className="PageContent JoinContent">
            <ul>
              <li>
                <p>아이디</p> <input type="text" placeholder="아이디" />
              </li>
              <li>
                <p>비밀번호</p>{" "}
                <input ref={pw} type="password" placeholder="비밀번호" />
              </li>
              <li>
                <p>비밀번호 확인</p>{" "}
                <input
                  onChange={(e) => {
                    if (pw.current.value !== e.currentTarget.value) {
                      pwcheck.current.style.display = "block";
                    } else {
                      pwcheck.current.style.display = "none";
                    }
                  }}
                  type="password"
                  placeholder="비밀번호 확인"
                />
                <br />
                <span className="JoinPw-fail" ref={pwcheck}>
                  비밀번호가 일치하지 않습니다.
                </span>
              </li>
              <li>
                <p>이메일</p> <input type="email" placeholder="이메일 입력" />@
                <select name="email" id="" email>
                  <option value="naver.com">naver.com</option>
                  <option value="google.com">google.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="nate.com">nate.com</option>
                  <option value="kakao.com">kakao.com</option>
                </select>
              </li>
              <li>
                <p>연락처</p>{" "}
                <input
                  type="phone"
                  placeholder="핸드폰 번호"
                  onInput={(e) => {
                    if (isNaN(e.currentTarget.value)) {
                      phcheck.current.style.display = "block";
                    } else {
                      phcheck.current.style.display = "none";
                    }
                  }}
                />
                <span className="JoinPh-fail" ref={phcheck}>
                  숫자만 입력해 주세요.
                </span>
              </li>
              <li>
                <p>주소</p> {" "}
                <input type="address" placeholder="주소 입력" ref={postaddress} className="Postaddress"/>
                {" "}
                <Postcode postaddress={postaddress}/>
              </li>
              <li>
                <p> </p>{" "}
              <input type="address" placeholder="상세주소 입력" className="Postaddress"/>
              </li>
            </ul>
          </div>
          <button className="PageBtn">회원가입완료</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
