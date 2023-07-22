/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const nav = getNode('nav')
const ul = getNode('ul')
const body = getNode('body')
const visualImage = getNode('.visual img')
const h1 = getNode('.nickName')

function setBgColor(color) {
  css(body, 'background', `linear-gradient(to bottom,${color},#000)`)
}

function setImage(src, alt) {
  attr(visualImage, 'src', src)
  attr(visualImage, 'alt', alt)
}

function setNameText(name) {
  h1.textContent = name
}

function handleSlider(e) {
  const target = e.target.closest('li')
  if (!target) return

  const list = [...ul.children]
  list.forEach((li) => removeClass(li, 'is-active'))
  addClass(target, 'is-active')

  const index = attr(target, 'data-index')
  setBgColor(`${data[index - 1].color[0]}`)
  setImage(`./assets/${data[index - 1].name}.jpeg`, `${data[index - 1].alt}`)
  setNameText(data[index - 1].name)
}

bindEvent(nav, 'click', handleSlider)
