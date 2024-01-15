/* ------------------------------------ 
　ローディングアニメーション
------------------------------------ */
const splash = document.getElementById('splash');
const splash_logo = document.getElementById('splash_logo');
let blVisit = sessionStorage.getItem('visit');

if(blVisit) {
  // アクセス済み
  // 処理なし
} else {
  // 初回アクセス
  // ローディング画面を表示
  splash.classList.remove('is-hidden');
  splash_logo.classList.remove('is-hidden');
  window.addEventListener('load',stopload);
  setTimeout('stopload()', 10000);

  // フェードアウトの設定を追加
  function stopload() {
    splash.classList.add('fade-bg');
    splash_logo.classList.add('fade-logo');
  }
  // アクセス済みに変更
  sessionStorage.setItem('visit', 'true'); 
}

/* ------------------------------------ 
　スライドショー
------------------------------------ */
const timer  = 7000; // 切り替わりの時間
const imgs   = document.querySelectorAll('#slider .slide');
let imgNum = 0; // カウント用

imgs[0].classList.add('show');

function showImg() {
  // スライドの枚数分繰り返す
  for(let i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('show');
  }
  if(imgNum >= imgs.length - 1) {
    // 最初のスライドに戻る
    imgNum = 0;
  } else {
    // 次のスライドに進む
    imgNum++;
  }
  imgs[imgNum].classList.add('show');
  showImgTimer();
}

// スライドを指定時間で切り替える
function showImgTimer() {
  setTimeout(showImg, timer);
}

showImgTimer();