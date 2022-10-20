import Layout from "../layouts/Layout";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faDeleteLeft,
  faCancel,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

function Community() {
  const input = useRef(null);
  const textarea = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);

  const getLocalData = () => {
    const data = localStorage.getItem("post");
    const dummyPosts = [
      { title: "Hello5", content: "Here comes description in detail." },
      { title: "Hello4", content: "Here comes description in detail." },
      { title: "Hello3", content: "Here comes description in detail." },
      { title: "Hello2", content: "Here comes description in detail." },
      { title: "Hello1", content: "Here comes description in detail." },
    ];

    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }
  };

  const [posts, setPosts] = useState(getLocalData());
  const [allowed, setAllowed] = useState(true);

  //글 저장 함수
  const createPost = () => {
    if (!input.current.value.trim() || !textarea.current.value.trim()) {
      return alert("제목과 본문을 모두 입력하세요");
    }
    setPosts([
      { title: input.current.value, content: textarea.current.value },
      ...posts,
    ]);
  };

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(posts));
  }, [posts]);

  return (
    <Layout name={"Community"}>
      <div className="visual">
        <div className="text_box">
          <h2>TALK THE TALK</h2>
          <p>
            Jeep Care Service는 Jeep만의 최상의 서비스를 제공하기 위한 프로그램
            으로 차량 보증과 5년 소모성 부품 무상 교환 서비스가 통합된 프로그램
            입니다. 더 나은 고객 만족을 위해 아래의 서비스 패키지를 Jeep 차량을
            구매하는 모든 고객에게 제공합니다.
          </p>
        </div>
      </div>
      <div className="inner">
        <div className="inputBox">
          <div className="top_box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              cumque quasi necessitatibus aliquid voluptas labore amet eaque
              quibusdam quas veniam!
            </p>
          </div>
          <input type="text" placeholder="제목을 입력하세요" ref={input} />
          <br />
          <textarea
            cols="30"
            rows="5"
            placeholder="본문을 입력하세요"
            ref={textarea}
          ></textarea>
          <br />

          <div className="btnSet">
            <button onClick={createPost}>WRITE</button>
          </div>
        </div>

        <div className="showBox">
          {posts.map((post, idx) => {
            return (
              <article key={idx}>
                {post.enableUpdate ? (
                  //수정모드
                  <>
                    <div className="editTxt">
                      <input
                        type="text"
                        defaultValue={post.title}
                        ref={inputEdit}
                      />
                      <br />
                      <textarea
                        cols="30"
                        rows="5"
                        ref={textareaEdit}
                        defaultValue={post.content}
                      ></textarea>
                    </div>

                    <div className="btnSet"></div>
                  </>
                ) : (
                  //출력
                  <>
                    <div className="txt">
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </div>
                    <div className="btnSet"></div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Community;
