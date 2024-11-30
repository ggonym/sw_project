document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 로그인 처리 로직 (예: API 호출)
  console.log('로그인 시도:', email, password);
});

document.getElementById('kakaoLogin').addEventListener('click', function() {
  // 카카오 로그인 처리 로직
  console.log('카카오 로그인 클릭');
});

document.getElementById('googleLogin').addEventListener('click', function() {
  // 구글 로그인 처리 로직
  console.log('구글 로그인 클릭');
});

document.getElementById('naverLogin').addEventListener('click', function() {
  // 네이버 로그인 처리 로직
  console.log('네이버 로그인 클릭');
});
