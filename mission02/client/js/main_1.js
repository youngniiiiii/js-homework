/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const nav = getNode('nav') // nav 클래스 4개 포스터의 부모
const ul = getNode('ul')
const body = getNode('body')
const visualImage = getNode('.visual img')
const h1 = getNode('.nickName')

function handleSlider(e) {
  // e.preventDefault()
  const target = e.target.closest('li') //1. 이벤트 클릭한 타켓의 부모중 li를 찾아서 변수지정
  // console.log(target)
  if (!target) return

  const list = [...ul.children]

  list.forEach((li) => removeClass(li, 'is-active')) //3.is-active 제거하기위해 배열로 변환하고 forEach반복문 사용
  addClass(target, 'is-active') // 2.그 li 에  is-active 생성

  //4.배경이미지 변경  css 변경 바디의 백그라운드를 변경할거야 클릭한 요소의 target의 데이터인덱스!!
  const index = attr(target, 'data-index')
  // css(body, 'background', `linear-gradient(to bottom,${data[index - 1].color[0]},${data[index - 1].color[1]})`)
  css(body, 'background', `linear-gradient(to bottom,${data[index - 1].color[0]},#000)`)

  //5. 클릭시 이미지 변경  타켓 img의 src를 변경해주기 => 속성변경해주는 attr 사용
  attr(visualImage, 'src', `./assets/${data[index - 1].name}.jpeg`)
  attr(visualImage, 'alt', `${data[index - 1].alt}`)
  h1.textContent = data[index - 1].name
  // target.src = `${data.name}`
  // console.log(target)

  // attr(visualImage, 'src', `./assets/${target.src}.jpeg`)
  // target.alt = data.alt;
}

bindEvent(nav, 'click', handleSlider)
