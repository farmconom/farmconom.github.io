var home_button = document.getElementById('click-home'),
    about_button = document.getElementById('click-about'),
    projects_button = document.getElementById('click-projects'),
    resume_button = document.getElementById('click-resume'),
    contact_button = document.getElementById('click-contact'),

    home_article = document.getElementById('home'),
    about_article = document.getElementById('about'),
    projects_article = document.getElementById('projects'),
    resume_article = document.getElementById('resume'),
    contact_article = document.getElementById('contact'),

    footer = document.getElementById('footer'),
    footer_contact = document.getElementById('footer-contact');

//--------------------------------------------------------------- home_button ---------------------------------------------------------
home_button.addEventListener('click', function() {
    if (home_article.style.display = 'none') {
        
        home_article.style.opacity = 0;
        home_article.style.display = 'flex';
      
        setTimeout(function() {
            home_article.style.opacity = 1;
        }, 50);

        about_article.style.display = 'none';
        projects_article.style.display = 'none';
        resume_article.style.display = 'none';
        contact_article.style.display = 'none';
        footer.style.display = 'block';
        footer_contact.style.display = 'none';
    }
  });
//---------------------------------------------------------------- about_button --------------------------------------------------------

about_button.addEventListener('click', function() {
    if (about_article.style.display = 'none') {
        
        about_article.style.opacity = 0;
        about_article.style.display = 'flex';
      
        setTimeout(function() {
            about_article.style.opacity = 1;
        }, 50);

        home_article.style.display = 'none';
        projects_article.style.display = 'none';
        resume_article.style.display = 'none';
        contact_article.style.display = 'none';
        footer_contact.style.display = 'none';
        footer.style.display = 'none';
        img_bottom_fade();
    }
  });
//-------------------------------------------------------------------- projects_button ----------------------------------------------------

projects_button.addEventListener('click', function() {
    if (projects_article.style.display = 'none') {
        
        projects_article.style.opacity = 0;
        projects_article.style.display = 'flex';
      
        setTimeout(function() {
            projects_article.style.opacity = 1;
        }, 50);

        about_article.style.display = 'none';
        home_article.style.display = 'none';
        resume_article.style.display = 'none';
        contact_article.style.display = 'none';
        footer.style.display = 'none';
        footer_contact.style.display = 'none';
    }
  });
//----------------------------------------------------------------------- resume_button -------------------------------------------------
  
  resume_button.addEventListener('click', function() {
    if (resume_article.style.display = 'none') {
        
        resume_article.style.opacity = 0;
        resume_article.style.display = 'flex';
      
        setTimeout(function() {
            resume_article.style.opacity = 1;
        }, 50);

        about_article.style.display = 'none';
        projects_article.style.display = 'none';
        home_article.style.display = 'none';
        contact_article.style.display = 'none';
        footer.style.display = 'none';
        footer_contact.style.display = 'none';
    }
  });
//---------------------------------------------------------------------------- contact_button --------------------------------------------

contact_button.addEventListener('click', function() {
    if (contact_article.style.display = 'none') {
        
        contact_article.style.opacity = 0;
        contact_article.style.display = 'flex';
      
        setTimeout(function() {
            contact_article.style.opacity = 1;
        }, 50);

        about_article.style.display = 'none';
        projects_article.style.display = 'none';
        resume_article.style.display = 'none';
        home_article.style.display = 'none';
        footer.style.display = 'none';
        footer_contact.style.display = 'block';
        // textarea will going up when close contact page
        textarea.style.height = '22px';
        // loader will not show when open contact page
        loader.style.display = 'none'; 
    }
  });
//--------------------------------------------------------------------------------------------------------------------------------------------
