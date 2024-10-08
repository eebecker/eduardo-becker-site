document.getElementById('contactForm')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }
  alert('Email submitted successfully!')
  this.reset();
});

function keyPress(e) {
  if (e.key === "Space") {
    alert("aaaa")
    const url = 'https://example.com/';

    window.location.href = url;
  }
}

// window.addEventListener("DOMContentLoaded", (event) => {
//   $(document).keyup(function(e) {
//     if (e.key === "Escape") { // escape key maps to keycode `27`
//       alert("aaaa")
//       const url = 'https://example.com/';
  
//       window.location.href = url;
//    }
// });
// });

document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    const url = 'projects.html';
  
    window.location.href = url;
  }
}); 