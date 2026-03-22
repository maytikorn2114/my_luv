       // เฉลยคำตอบ (ก=1, ข=2, ค=3, ง=4)
        let correct = [1, 3, 2, 3, 1, 2, 1, 4, 2, 3]; 
        let yourCorrect = 0;
        let yourIncorrect = 0;

        function getAns(no, ans) {
            let totalSubject = 10; 
            if (correct[no - 1] == ans) { yourCorrect++; } 
            else { yourIncorrect++; }

            $("#no" + no).hide();

            if (no < totalSubject) {
                $("#no" + (no + 1)).fadeIn();
            } else {
                $("#showCorrect").html("ถูก: " + yourCorrect + " ข้อ");
                $("#showIncorrect").html("ผิด: " + yourIncorrect + " ข้อ");
                let percent = (yourCorrect / totalSubject) * 100;
                let msg = "";
                if (percent >= 100) msg = "รักที่สุด! จำได้หมดเลย 😍";
                else if (percent >= 70) msg = "เก่งมากกก จำแม่นเหมือนกันนะเรา 💖";
                else if (percent >= 50) msg = "เกือบดีแล้ว อีกนิดนะ 🤏";
                else msg = "เชอะะ! งอนแย้วว 😤";
                
                $("#showMsg").html(msg);
                $("#showAns").fadeIn();
            }
        }

        function game_fadein() { 
            yourCorrect = 0; yourIncorrect = 0;
            $("#showAns").hide();
            for(let i=1; i<=10; i++) { $("#no"+i).hide(); }
            $("#no1").show();
            $('#popup_game').fadeIn(); 
        }

        function remem_fadein() {
            for(let i=2; i<=5; i++) { $("#num"+i).hide(); }
            $("#num1").show();
            $('#popup_message').fadeIn(); 
        }

        function nextMsg(current) {
            $("#num" + current).hide();
            $("#num" + (current + 1)).fadeIn();
        }

        function hideForm() { 
            $('.popup-container').fadeOut(); 
        }

        // เอฟเฟกต์พลุหัวใจและโชว์ QR Code
        function celebrateLove() {
            var end = Date.now() + (2.5 * 1000);
            var colors = ['#ff9a9e', '#fecfef', '#ffffff', '#ff6b70'];

            (function frame() {
                confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0, y: 0.75 }, colors: colors });
                confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1, y: 0.75 }, colors: colors });
                if (Date.now() < end) { requestAnimationFrame(frame); }
            }());

            // รอพลุทำงานแป๊บนึงแล้วเปลี่ยนหน้าเป็น QR Code
            setTimeout(function() {
                $('#popup_message').fadeOut(400, function() {
                    $('#popup_qrcode').fadeIn();
                });
            }, 2000);
        }

        function createHearts() {
            const heartContainer = document.getElementById('heart-bg');
            setInterval(() => {
                const heart = document.createElement('i');
                heart.classList.add('fas', 'fa-heart', 'heart-item');
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 3 + 3 + "s";
                heart.style.fontSize = Math.random() * 15 + 10 + "px";
                heart.style.opacity = Math.random() * 0.6 + 0.2;
                heartContainer.appendChild(heart);
                setTimeout(() => { heart.remove(); }, 6000);
            }, 400);
        }

        window.onload = createHearts;