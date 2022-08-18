# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





# Project process

* [React Reference](https://ko.reactjs.org/docs/hello-world.html)



## 개발 준비

### React가 뭐냐?

* JS 라이브러리
* SPA(Single Page Application)
* 한 페이지에서 모든 요소를 불러와 동작



### 환경

* node js 기반의 프로그램이라서 컴에 설치하고
* bash에서 `npm install` 해서
* `create-react-app 상대_path` 명령어로 디렉토리에 생성하는 방법으로 프로젝트를 생성한다.
* bash 에서 해당 경로에 생성한 플젝을 vs code 에서 폴더 열기로 실행한다.



### 배포 및 실행 테스트

* npm 깔고 했으면, 터미널에서 해당 경로로 이동해 npm run start 하면 serve 어쩌구 메시지 나온다. 깔면 된다.
* 그럼 react 프로젝트도, 스프링처럼 로컬 서버를 제공한다.
* 실시간으로 반영이 되는 대신, 이 경우 메모리를 많이 잡아먹는다.
* 그러니 배포할 때는 npm run build 로 빌드 파일을 만든다. 다만 개발 중에는 잘 사용할 일 없을 듯.



### 구성

* 기본적으로 public이 있고, src가 있다.
* 기본 프로젝트 구성과 마찬가지로 public을 읽어오는거고 그 안에 index.html 파일이 있다.
* 거기서 id가 root로 (default) 설정된게 있는데, 이 녀석을 src의 index.js (default) 에서 루트를 가져온다.
* js 기반이니 딱 보면 이해할 것. document.getElementById로 root 를 가져와서 render() 안의 내용을 반환
* 각각의 파일들이 import로 참조 참조 되어있는 형태이다.



### 함수형 / 클래스형

* 아마 예전엔 함수형에서는 지원되지 않는 기능때문에 클래스형을 주로 썼다고 했나보다.
* 요즈음엔 훅이라는 기술 덕에 함수형에서도 이전에 안되던게 된다더라.
* 더 직관적인 함수형을 많이 쓰는 추세라고 한다.



## 개발 시작

* 그래서 내가 개발할 때 만들어야 뭘 건드려야 되느냐?

```react
<!-- index.html -->

...
<div id="root">
      
</div>
...
```

* public 경로의 index.html에서는 div의 id 가 무엇인지만 확인하면 될 듯 하다.

```react
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

* src 경로의 index.js에서는 root 노드가 render() 함수를 이용해 App(.js 생략)을 반환(출력)한다고 이해하면 될듯



### App.js

```react
// App.js
import './App.css';

function Header(props) {
    return (
        <header>
            <h1><a href="/">{props.title}</a></h1>
        </header>
    );
}

function Nav(props) {
    const list = []
    for(let i=0; i<props.topics.length; i++) {
        let t = props.topics[i];
        list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
    } 
    return (
        <nav>
            <ol>
                {list}
            </ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

export default function App() {
    const topics = [
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' },
    ]
    return (
        <div>
            <Header title="REACT"></Header>
            <Nav topics={topics}></Nav>
            <Article title="Welcome" body="Hello, Web" ></Article>
        </div>
    );
}
```

* `export default function App;` 은 문장 뜻 그대로 외부에서 이 js 파일을 쓰려면 App라는 이름으로 쓰면 된다는 뜻.



### Component

*  react를 이용해 위와같은 함수형태로 코드들을 나누어 정리하는데, 이를 컴포넌트라한다.
*  이렇게 App에서는 직접 정의한 Component들(Header, Nav, Article..)을 호출해서 간단하게 사용한다.
*  뒤에서 배우겠지만, Component는 입력과 출력이 존재한다. 입력은 Prop, 출력은 처리 후 반환하는 UI
*  즉, Prop과 State를 이용해 컴포넌트 함수를 실행하여 새로운 return 값을 만들어 내는 것



### Props

*  title, topic, body 등 내가 넘겨주는 값을 props 라고 부르는데, 매개변수 객체 정도로 이해하면 되지 않을까 싶다.
*  사용은 { props.속성이름 } 형태로 중괄호에 감싸서 사용한다. 
*  Props는 컴포넌트를 사용하는 사용자를 위한 데이터이다.
*  내가 값을 준대로 Component를 조작해서 다른 값을 내도록 할 때 매개변수의 역할을 하는 것이 Props.
*  다형성 개념인가..?



### Key

```jsx
for(let i=0; i<props.topics.length; i++) {
	let t = props.topics[i];
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
} 

// map으로 이렇게 간단하게도 가능하다.
{ props.topics.map((t) => (<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)) }
```

* 반복문 등으로 자동으로 생성되는 태그의 경우, key를 꼭 부여해야한다. 



### 이벤트

```jsx
// function App()
<Header title="WEB" onChangeMode={() => {
	alert('Header');
}}></Header>
<Nav topics={topics} onChangeMode={(id) => {
	alert(id);
}}></Nav>

// function Header()
<a href="/" onClick={(event) => {
	event.preventDefault();
	props.onChangeMode()
}}>{props.title}</a>

// function Nav()
<a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
	event.preventDefault();
    props.onChangeMode(event.target.id);
}}>{t.title}</a>
```

* onClick 이벤트(event)를 주어서, preventDefault()를 하면, 클릭했을 때 reload를 방지하는 역할을 한다.
* 그리고 props의 onChangeMode() 라는 함수를 호출한다.
* Nav에서 id를 출력해주도록 하고싶다면, 위와 같이 상위 a태그에 id를 t.id로 설정하고, event.target으로 이벤트를 발생시킨 태그를 찾아 그 태그의 id를 받아오는 방법을 사용할 수 있다.



### State

* State는 Props 값에 따라 내부 구현에 필요한 데이터. 즉, 사용자는 알 필요 없는 내부적으로 사용되는 정보
* 객체 지향적 입장에서 보면 캡슐화 개념이지 않을까 싶다.



* useState의 인자는, 그 State의 초기값이다.
* 그 State의 값은 0번째 인덱스 [0]로 읽는다. 바꿀 때는 1번째 인덱스 [1]의 함수로 바꾼다.