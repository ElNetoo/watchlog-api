import app from './app.js';

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`API WatchLog rodando em http://localhost:${PORTA}`);
});