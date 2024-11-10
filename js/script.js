function startAnimation() {
  const numParticipants = parseInt(
    document.getElementById("numParticipants").value
  );
  if (isNaN(numParticipants) || numParticipants <= 0) {
    alert("正の整数を入力してください");
    return;
  }

  const canvas = document.getElementById("canvas");
  const sound = document.getElementById("sound");
  canvas.innerHTML = ""; // 既存の図形をクリア

  const columns = 10; // 折り返し単位
  const animationSpeed = 300; // アニメーション速度(ms)と音の再生間隔
  sound.play();

  for (let i = 0; i < numParticipants; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";

    const x = (i % columns) * 50;
    const y = Math.floor(i / columns) * 50;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    setTimeout(() => {
      canvas.appendChild(circle);
      sound.currentTime = 0;
      if (i === numParticipants - 1) {
        // 最後のタイミングで停止
        sound.pause();
      } else {
        sound.play();
      }
    }, i * animationSpeed);
  }
}
