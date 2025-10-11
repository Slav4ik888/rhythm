// PARTNER_IDS
export const PARTNER_IDS = [
  '5973512', // Александр Непомнящий
  '4328693', // Олег Казанцев Бизнес-практикум Молдова
];


// Сгенерить код
function generateRandomDigits() {
  let result = '';
  for (let i = 0; i < 7; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

// console.log(generateRandomDigits());
