const profile_img_bottom = document.getElementById('profile-img-bottom');
const profile_img_top = document.getElementById('profile-img-top');

profile_img_top.addEventListener('mouseenter', () => {
    img_top_fade();
});

profile_img_top.addEventListener('mouseleave', () => {
    img_bottom_fade();
});



//----------------------------------------------------------------------------------------------------------------------------------
function img_top_fade() {
    profile_img_top.style.transform = 'translate(1rem, 1rem)';
    profile_img_bottom.style.transform = 'translate(0)';

    profile_img_top.style.filter = 'brightness(.1) contrast(.1) hue-rotate(30deg) saturate(1%)';
    profile_img_bottom.style.filter = 'none';

    profile_img_top.style.opacity = '0';
    profile_img_bottom.style.opacity = '1';
}
function img_bottom_fade() {
    profile_img_top.style.transform = 'translate(0)';
    profile_img_bottom.style.transform = 'translate(1rem, 1rem)';

    profile_img_top.style.filter = 'none';
    profile_img_bottom.style.filter = 'brightness(.1) contrast(.1) hue-rotate(30deg) saturate(1%)';

    profile_img_top.style.opacity = '1';
    profile_img_bottom.style.opacity = '.6';
}