const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
}

//변수선언
const loginEmail = document.querySelector('#userEmail')
const loginPassword = document.querySelector('#userPassword')
const loginButton = document.querySelector('.btn-login')
// console.log(loginEmail)
// console.log(loginPassword)

//정규표현식 조건처리
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(text).toLowerCase())
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/
  return re.test(String(text).toLowerCase())
}

// 먼저 한개의 함수로 만들어주기dd
/*
function loginPage() {
  loginEmail.addEventListener('input', () => {
    let idValue = loginEmail.value
    console.log(idValue)

    if (!emailReg(idValue)) {
      loginEmail.classList.add('is--invalid')
    } else {
      loginEmail.classList.remove('is--invalid')
    }
  })

  loginPassword.addEventListener('input', () => {
    let passValue = loginPassword.value
    console.log(passValue)
    if (pwReg(passValue)) {
      // console.log(true)
      loginPassword.classList.remove('is--invalid')
    } else {
      // console.log(false)
      loginPassword.classList.add('is--invalid')
    }
  })

  loginButton.addEventListener('click', (event) => {
    //클릭시 아이디값 체크
    event.preventDefault() 
    if (loginEmail.value === user.id && loginPassword.value === user.pw) {
      window.location.href = 'welcome.html'
      // console.log(idValue)
    } else {
      console.log('실패!')
    }
  })
}
loginPage()


*/

// 함수 쪼개기
// 1. email 정규표현식을 사용한 validation
let isEmailVaild = false
let isPwVaild = false

function validateEmail() {
  const idValue = loginEmail.value
  if (emailReg(idValue)) {
    loginEmail.classList.remove('is--invalid')
    isEmailVaild = true
  } else {
    loginEmail.classList.add('is--invalid')
    isEmailVaild = false
  }
}

loginEmail.addEventListener('input', validateEmail) //이메일 형식 유효성검사

// 2. pw 정규표현식을 사용한 validation
function validatePassword() {
  const passValue = loginPassword.value
  if (pwReg(passValue)) {
    loginPassword.classList.remove('is--invalid')
    isPwVaild = true
  } else {
    loginPassword.classList.add('is--invalid')
    isPwVaild = false
  }
}

loginPassword.addEventListener('input', validatePassword) //비밀번호 형식 유효성 검사

// 3. 상태 변수 관리 ???

// 4. 로그인 버튼을 클릭시 조건처리

function loginButtonValidate(event) {
  event.preventDefault()
  if (!isEmailVaild || !isPwVaild) {
    return
  }

  if (loginEmail.value === user.id && loginPassword.value === user.pw) {
    window.location.href = 'welcome.html'
  } else {
    console.log('이메일 또는 비밀번호를 잘못 입력했습니다.')
  }
}

loginButton.addEventListener('click', loginButtonValidate)

/* 


이메일이 통과됫는지 상태변수를 만들어 
let emailPa=false
emailpass=true

true 인지 false 인지 상태값을 넣는게 상태변수 
로그인누르면 아무런일이안들어나 

ps도 체크해야해 맞다면 다음으로 넘겨줘야해 

사용자값이랑 ===유저객체 

*/
