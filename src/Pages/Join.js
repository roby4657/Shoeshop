import { useRef } from "react";

const Join = () => {
    const password=useRef(null);
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
                <p>비밀번호</p> <input ref={password}
                type="password" placeholder="비밀번호" />
              </li>
              <li>
                <p>비밀번호 확인</p> <input 
                onChange={(e)=>{
                    if(password.current.value!==e.currentTarget.value){
                        console.log('zz');
                    }
                }}
                type="password" placeholder="비밀번호 확인" /> <br />
                <span className="JoinPw-fail">비밀번호가 일치하지 않습니다.</span>
              </li>
              <li>
                <p>이메일</p> <input type="email" placeholder="이메일 입력" />
              </li>
               <li>
                <p>연락처</p> <input type="phone" placeholder="핸드폰 번호" />
              </li>
              <li>
                <p>주소</p> <input type="address" placeholder="주소 입력" />
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
