let hungerLevel = 100;  // 倉鼠的飽食度
let feedButton = document.getElementById('feedButton');
let hungerDisplay = document.getElementById('hungerLevel');
let gameOverMessage = document.getElementById('gameOverMessage');

function feedHamster() {
    // 如果飽食度還有剩
    if (hungerLevel > 0) {
        hungerLevel += 10;  // 餵食後飽食度增加
        if (hungerLevel > 100) {
            hungerLevel = 100;  // 最高100
        }
        hungerDisplay.textContent = hungerLevel;
    }
    
    // 每次餵食後飢餓值減少
    hungerLevel -= 5;
    hungerDisplay.textContent = hungerLevel;
    
    // 如果飢餓值過低則結束遊戲
    if (hungerLevel <= 0) {
        gameOverMessage.style.display = 'block';  // 顯示遊戲結束信息
        feedButton.disabled = true;  // 禁用餵食按鈕
    }
}

feedButton.addEventListener('click', feedHamster);
