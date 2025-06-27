
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.querySelector('.lang-es').style.display = lang === 'es' ? 'block' : 'none';
  document.querySelector('.lang-en').style.display = lang === 'en' ? 'block' : 'none';
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().startsWith(lang));
  });
}
window.onload = function() {
  const lang = localStorage.getItem('lang') || 'es';
  setLang(lang);
};
