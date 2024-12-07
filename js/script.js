//고객센터 faq
document.addEventListener("DOMContentLoaded", function() {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");

  question.addEventListener("click", function() {
    if (answer.style.display === "none") {
      answer.style.display = "block"; 
    } else {
      answer.style.display = "none"; 
    }
  });
});
 