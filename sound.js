function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //変化したpropertyがtransformでないとき return
  //であるとき
  e.target.classList.remove('playing');
  //イベントを発生させたオブジェクトへの参照
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;

  key.classList.add('playing') //要素のクラスリストへクラスの追加
  audio.currentTime = 0; //これで音が一度終わるまで待たなくていい
  audio.play();
  console.log(key);
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
