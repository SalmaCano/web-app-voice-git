const controltexto = document.getElementById('controltexto');



document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const listeningText = document.getElementById('listeningText');
    const resultDiv = document.getElementById('result');

    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
// Hola 
    recognition.lang = 'es-ES';

    recognition.onstart = function () {
        listeningText.innerHTML = 'Escuchando...';
    };

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;

        const keyword = 'tamaño 3';

        resultDiv.innerHTML = `<strong>Resultado:</strong> ${transcript}`;

        if (transcript.includes(keyword)){
            controltexto.classList.add ("fs-1");
            controltexto.style.color="red";
            console.log("si se encontro la palabra...");

        }

       

    };

    recognition.onerror = function (event) {
        console.error('Error en el reconocimiento de voz:', event.error);
    };

    recognition.onend = function () {
        listeningText.innerHTML = 'Fin de la escucha';
    };

    startBtn.addEventListener('click', function () {
        recognition.start();
    });
});

