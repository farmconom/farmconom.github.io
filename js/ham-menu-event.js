// hamburger click event
var hamMenu = document.getElementById('ham-menu');
var navButtons = document.getElementById('nav-buttons');
var tt=0;

// close ham menu auto, when expand screen
window.addEventListener( 'load', () => {
    startQueries()
    })
    const startQueries = () => {
    let newQuery = window.matchMedia( ' ( min-width: 600px ) ' )
    const queryListenChanges = query => {
    if( query.matches){
      tt=0;
      navButtons.style.cssText = ('width: 100%;');
      navButtons.style.cssText = ('transition: none;');

    }else{
      tt=1;
      hamMenu.classList.remove('active');
      hamMenu.classList.add('not-active');
      navButtons.style.cssText = ('width: 0;');
      navButtons.style.cssText = ('transition: none;');

      //click out of area of ham-menu to close menu
      document.addEventListener('click', function(event) {
        // Check if the clicked element is hamMenu or a descendant of navButtons
        if (!event.target.closest('#ham-menu') && !event.target.closest('#nav-buttons') && tt !== 0) {
          navButtons.style.width = '0';
          hamMenu.classList.remove('active');
          hamMenu.classList.add('not-active');
        }
      });
    }} 
    newQuery.addListener( queryListenChanges )
    queryListenChanges( newQuery )
  }
// click ham to show menu
hamMenu.addEventListener('click', function() {
  hamMenu.classList.toggle('active');
  hamMenu.classList.toggle('not-active');

  if (hamMenu.classList.contains('active')) {
    navButtons.style.cssText = ('transition: all .2s;');
    navButtons.style.width = '40%';
    tt=1; 

  } else {
    navButtons.style.cssText = ('transition: all .2s;');
    navButtons.style.width = '0';
    tt=0;
  }
});





