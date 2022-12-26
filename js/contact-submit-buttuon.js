const sendBtn = document.getElementById('send-button'),
      loader = document.getElementById('loader'),
      textarea = document.getElementById('hold-textarea');
      


sendBtn.addEventListener('click', () => {
    document.getElementById('real-button').click();
    loader.style.display = 'inline-block'; 
    
    loader.classList.remove('loader');
    loader.offsetHeight;
    loader.classList.add('loader');
});


// textarea will drop down
textarea.addEventListener('click', () => {
    textarea.style.height = '100px';
});

function addHyphen() {
    var input = document.getElementById('emailInput');

    if (input.value != "") {
        input.value = input.value + "`";
    }
  }
