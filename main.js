const block_3 = document.querySelector('.block_3');
const author = document.querySelector('.author');

const options = {
  root: null, 
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

observer.observe(block_3);
observer.observe(author);