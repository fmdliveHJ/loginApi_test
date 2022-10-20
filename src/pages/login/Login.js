import React from "react";

const Login = ({
  loginId,
  password,
  loginSubmit,
  idChange,
  pwChange,
  duplicate,
}) => {
  return (
    <div>
      <div className="formBox">
        <form onSubmit={loginSubmit}>
          <input
            type="text"
            placeholder="아이디 입력"
            value={loginId}
            onChange={idChange}
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={pwChange}
          />

          <button type="submit">로그인</button>
          {duplicate ? (
            <button style={{ pointerEvents: "none", background: " gray" }}>
              회원가입
            </button>
          ) : (
            <button>회원가입</button>
          )}
        </form>
        {duplicate ? <div>동일한 아이디가 있습니다</div> : null}
      </div>
    </div>
  );
};

export default Login;
