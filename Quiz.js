function checkAnswer(answer) {
      const correct = 'A';
      const result = document.getElementById('result');
      if (answer === correct) {
        result.textContent = '正解です！ ';
        result.style.color = 'green';
      } else {
        result.textContent = '不正解です。 ';
        result.style.color = 'red';
      }
    }