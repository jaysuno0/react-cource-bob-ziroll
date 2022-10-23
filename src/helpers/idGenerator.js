function generateId() {
  const numbers = [];
  
  for (let i = 0; i < 6; i++) {
    numbers.push(Math.round(Math.random() * 9));
  }

  return numbers.join('');
}

export default generateId;