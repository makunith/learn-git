const startBtn = document.getElementById('btn-to-scene'); // หรือ ID ปุ่มเริ่มของนาย
const music = document.getElementById('cafe-music');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        music.play(); // เริ่มเล่นเพลงเมื่อมีการกดปุ่ม
    });
}

music.volume = 0.3; // ปรับให้ดังแค่ 30% ของเสียงจริง