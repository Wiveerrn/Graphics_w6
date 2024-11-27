// コース詳細を表示する関数
function showCourseDetails(course) {
    const details = {
        standard: `
            <h4>スタンダードコース (¥3,500)</h4>
            <p>カルビ、ハラミ、トンたん塩、やみつき豚ホルモン、とりもも、野菜盛り合わせ</p>
            <p>デザート付き</p>
        `,
        premium: `
            <h4>プレミアムコース (¥5,000)</h4>
            <p>工大カルビ、ハラミ付きヤゲン、豚タン、希少部位盛り合わせ、焼き野菜、サラダ、スープ</p>
            <p>デザート＋特製ドリンク付き</p>
        `,
        softDrink: `
            <h4>ソフトドリンク飲み放題 (¥1,000)</h4>
            <p>ウーロン茶、緑茶、コーラ、オレンジジュースなど</p>
        `,
        alcohol: `
            <h4>アルコール飲み放題 (¥2,500)</h4>
            <p>ビール、焼酎、日本酒、ハイボール、カクテル各種</p>
        `
    };

    document.getElementById('modal-details').innerHTML = details[course];
    document.getElementById('modal').style.display = 'block';
}

// モーダルを閉じる関数
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 予約フォームを開く関数
function openReservationForm() {
    document.getElementById('reservationForm').style.display = 'block';
}

// 予約フォームを閉じる関数
function closeReservationForm() {
    document.getElementById('reservationForm').style.display = 'none';
}

// 予約フォーム送信時の処理
document.getElementById('reserveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('予約が完了しました！ありがとうございます！');
    closeReservationForm();
});
