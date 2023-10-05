VSCode에서 리액트 프로젝트를 구현했습니다.
<br/>
<br/>
<br/>
:exclamation: <b>bootstrap 설치</b> <br/>
npm i react-bootstrap bootstrap
<br/>
<br/>
<br/>
:exclamation: <b>MySQL 설치</b><br/>
npm install express body-parser mysql
<br/>
<br/>
<br/>
:exclamation: <b>nodemon 설치 </b><br/>
npm install nodemon
<br/>
<br/>
<br/>
:exclamation: <b>route dom 설치 </b><br/>
npm install react-router-dom --save
<br/>
<br/>
<br/>
bd라는 데이터베이스에 board 테이블을 만들었습니다.
<br/>
<br/>
use bd;

create table board (<br/>
	ID int auto_increment primary key,<br/>
        TITLE varchar(30),<br/>
	CONTENT varchar(500),<br/>
        REGISTER_ID varchar(20),<br/>
        REGISTER_DATE DATETIME DEFAULT now(),<br/>
        UPDATER_ID varchar(20),<br/>
        UPDATER_DATE DATETIME DEFAULT now()<br/>
);<br/>
<br/>
<br/>

클라이언트와 서버를 따로따로 구동하여 로컬에 접속하였습니다.<br/>
서버와 클라이언트의 경로가 다릅니다. <br/>
<br/><br/>

:exclamation: <b>클라이언트 접속</b><br/>
npm start<br/>
<br/>
:exclamation: <b>서버 접속</b><br/>
npm run dev


<br/><br/>
아래는 로컬에서 보여지는 화면입니다.
<br/><br/>
![image](https://github.com/darae729/1005_board/assets/132329442/3df7819f-66b7-40c4-a8b4-023b64a58d37)
<br/><br/></br>

글쓰기 버튼을 누르게 되면 나타나는 화면입니다.
<br/><br/>
![image](https://github.com/darae729/1005_board/assets/132329442/57918642-f669-4424-a496-67d196fdb34f)

<br/><br/>
타이틀과 내용을 입력 후 확인 버튼을 누르면
<br/><br/>
![image](https://github.com/darae729/1005_board/assets/132329442/e156e0dd-8b09-4be4-9ae2-abf278a2a264)

<br/><br/><br/>
게시판 글 목록에 나타나게 됩니다.
<br/><br/>
![image](https://github.com/darae729/1005_board/assets/132329442/2d3f49b9-2542-4301-9fee-3041167c2d3a)
<br/><br/></br>

삭제하고 싶은 목록을 체크한 뒤 삭제 버튼을 누르면 삭제가 됩니다.
<br/><br/>
![image](https://github.com/darae729/1005_board/assets/132329442/194da60f-7c33-43d3-8d0b-b149c933376b)

<br/><br/><br/>
또한 수정하고 싶은 목록을 체크 한 뒤 수정 버튼을 누르고 <br/>
원하는 값을 입력 후 확인 버튼을 누르면 </br></br>
![image](https://github.com/darae729/1005_board/assets/132329442/7c22ec25-4e47-4941-b313-5597600fd437)

<br/><br/>
글 목록에서 수정이 됩니다.
</br></br>
![image](https://github.com/darae729/1005_board/assets/132329442/04e72b23-d46b-444e-87c1-412ba4f634f0)

