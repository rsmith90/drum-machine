        function play(str) {
            let displayField = 
                document.getElementById("display");

                if (str === "q" || str === "Q") {
                    displayField.innerHTML = 
                    "<h2>Heater-1</h2>";
            } else if (str === "w" || str === "W") {
                    displayField.innerHTML = 
                    "<h2>Heater-2</h2>";
            } else if (str === "e" || str === "E") {
                    displayField.innerHTML = 
                    "<h2>Heater-3</h2>";
            } else if (str === "a" || str === "A") {
                    displayField.innerHTML = 
                    "<h2>Heater-4_1</h2>";
            } else if (str === "s" || str === "S") {
                    displayField.innerHTML = 
                    "<h2>Heater-6</h2>";
            } else if (str === "d" || str === "D") {
                    displayField.innerHTML = 
                    "<h2>Kick_n_Hat</h2>";
            } else if (str === "z" || str === "Z") {
                    displayField.innerHTML = 
                    "<h2>RP4_KICK_1</h2>";
            } else if (str === "x" || str === "X") {
                    displayField.innerHTML = 
                    "<h2>Cev_H2</h2>";
            } else if (str === "c" || str === "C") {
                    displayField.innerHTML = 
                    "<h2>Brk_Snr</h2>";
        }

            var audio = 
                document.getElementById(str);
            audio.play();
        }

        window.document.onkeyup = function(event) {
            let keystroke = event.key
            if (keystroke === "q" || keystroke === "Q") {
                play("Q");
            } else if (keystroke === "w" || keystroke === "W") {
                play("W");
            } else if (keystroke === "e" || keystroke === "E") {
                play("E");
            } else if (keystroke === "a" || keystroke === "A") {
                play("A");
            } else if (keystroke === "s" || keystroke === "S") {
                play("S");
            } else if (keystroke === "d" || keystroke === "D") {
                play("D");
            } else if (keystroke === "z" || keystroke === "Z") {
                play("Z");
            } else if (keystroke === "x" || keystroke === "X") {
                play("X");
            } else if (keystroke === "c" || keystroke === "C") {
                play("C");
        }
    }