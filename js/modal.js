(() => {
const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");



  function toggleModal() {
  const isMenuOpen = openModalBtn.getAttribute('aria-expanded') === 'true' || false;
  openModalBtn.setAttribute('aria-expanded', !isMenuOpen);

  const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);

  modal.classList.toggle("is-hidden");
  }

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(max-width: 1158px)').addEventListener('change', e => {
    if (!e.matches) return;
    modal.classList.add("is-hidden");
    openModalBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

