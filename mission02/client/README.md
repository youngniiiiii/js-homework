### 변수지정

```js
const nav = getNode('nav')
const ul = getNode('ul')
const body = getNode('body')
const visualImage = getNode('.visual img')
const h1 = getNode('.nickName')
```

### 배경 색 변경하는 함수

- 유틸함수(css) 사용해서 body의 style 변경

```js
function setBgColor(color) {
  css(body, 'background', `linear-gradient(to bottom,${color},#000)`)
}
```

### 배경 이미지,alt 값 변경하는 함수

- 유틸함수 (attr) 사용해서 img의 src,alt값 변경

```js
function setImage(src, alt) {
  attr(visualImage, 'src', src)
  attr(visualImage, 'alt', alt)
}
```

### 클릭시 이미지 위에 이름 변경하는 함수

- textContent 사용해서 text 변경

```js
function setNameText(name) {
  h1.textContent = name
}
```

### 클릭시 이미지 위에 이름 변경하는 함수

- 이벤트 함수 생성

```js
function handleSlider(e) {}
```

- handleSlider 함수 안에 코딩

```js
const target = e.target.closest('li')
//이벤트 클릭한 타켓의 부모중 li를 찾아서 변수지정

if (!target) return
// target이 없을경우 함수 종료

const list = [...ul.children]
// 전개연산자로 list에 ul의 자식들을 배열로 담아주기

list.forEach((li) => removeClass(li, 'is-active'))
//is-active 제거하기 위해 forEach 반복문 사용

addClass(target, 'is-active')
// 클릭시 target에 calss is-active 생성

const index = attr(target, 'data-index')
//target의 data-index를 index에 할당

setBgColor(`data[index - 1].color[0]`)
// 배경이미지 컬러 변경함수 호출

setImage(`./assets/${data[index - 1].name}.jpeg`, `${data[index - 1].alt}`)
// 이미지 변경함수 호출

setNameText(data[index - 1].name)
//캐릭터 이름 변경하는 함수 호출
```

- 만들어놓은 유틸함수로 이벤트 handleSlider 실행

```js
bindEvent(nav, 'click', handleSlider)
```
