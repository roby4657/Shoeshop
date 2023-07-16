const Login = ()=>{


    return(
      <div style={{backgroundColor:'rgb(240, 240, 240)'}}>
      <div className="LoginWrap">
        
        <div className="LoginBox">
            
            <div className="LoginTitle">회원 로그인</div>
            
             <div className="LoginContent">
                <ul>
                <li className="LoginId"><p>아이디</p> <input type="text" placeholder="아이디"/></li>
                <li className="LoginPw"><p>비밀번호</p> <input type="password" placeholder="비밀번호" /></li>

               </ul>
            
            

            <button className="LoginBtn">로그인</button><br />

            <div className="LoginCheckbox">
            <input type="checkbox" id="LoginSaveId"/>
            <label htmlFor="LoginSaveId">아이디 저장 </label>

            <label htmlFor="LoginAutoLogin">
            <input type="checkbox" id="LoginAutoLogin"/>
            자동 로그인 </label>
            
             아이디/비밀번호 찾기 
             </div>
                </div>   
                <hr />
                <div className="LoginSocial">
                  <button className="LoginBtn naver-btn">네이버 계정으로 로그인</button>
                  <button className="LoginBtn kakao-btn">카카오 계정으로 로그인</button>
                  <button className="LoginBtn facebook-btn">페이스북 계정으로 로그인</button>
                </div>
            

        </div>

      </div> 
      </div> 
    )
}

export default Login;