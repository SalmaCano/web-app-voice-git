const startButton = document.getElementById('startButton');
const speechResult = document.getElementById('speechResult');

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'es-ES';

startButton.addEventListener('click', () => {
  recognition.start();
  speechResult.textContent = 'Escuchando...';
});

recognition.onresult = (event) => {
  const last = event.results.length - 1;
  const transcript = event.results[last][0].transcript;
  speechResult.textContent = 'Orden identificada: ' + transcript;
};
