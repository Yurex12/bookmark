const featuresData = [
  {
    title: 'Bookmark in one click',
    content:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imageUrl: 'images/illustration-features-tab-1.svg',
  },
  {
    title: 'Intelligent search',
    content:
      'Our powerfuk search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imageUrl: 'images/illustration-features-tab-2.svg',
  },
  {
    title: 'Share your bookmarks',
    content:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imageUrl: 'images/illustration-features-tab-3.svg',
  },
];
const dataContainer = document.querySelector('[data-features-container]');

//feature container data
const featureBtn = document.querySelectorAll('[data-features]');
const dataImage = dataContainer.querySelector('[data-image]');
const dataHeading = dataContainer.querySelector('[data-heading]');
const dataContent = dataContainer.querySelector('[data-content]');

function dataDesturctor(index) {
  const { imageUrl, content, title } = featuresData[index];

  dataImage.src = imageUrl;
  dataHeading.innerHTML = title;
  dataContent.innerHTML = content;
}

//adds the data to the page on when opened and the class active to the first feature btn
featureBtn[0].classList.add('active');
dataDesturctor(0);

// to know the last index of the active class
let currentIndex = 0;

//to check if the button is active, already click and not to run the function if its active so as not to slow down the site
let btnIndex;

featureBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!(btnIndex === +btn.getAttribute('data-features'))) {
      featureBtn[currentIndex].classList.remove('active');
      btn.classList.add('active');
      const index = +btn.getAttribute('data-features');
      currentIndex = index;
      btnIndex = index;
      dataDesturctor(index);
    }
  });
});

const faqHeader = document.querySelectorAll('#faq-header');

faqHeader.forEach((header) => {
  header.addEventListener('click', () => {
    if (!header.classList.contains('faq-active')) {
      for (let i = 0; i < faqHeader.length; i++) {
        if (faqHeader[i].classList.contains('faq-active')) {
          faqHeader[i].classList.remove('faq-active');
        }
      }
      header.classList.add('faq-active');
    } else {
      header.classList.remove('faq-active');
    }
  });
});

//nav

const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const links = document.querySelectorAll('#link');

function closeNavMenu() {
  nav.classList.remove('active');
  logo.classList.remove('hidden');
  openBtn.classList.remove('hidden');
  document.body.style.overflow = 'scroll';
}
links.forEach((link) => {
  link.addEventListener('click', () => {
    closeNavMenu();
  });
});

openBtn.addEventListener('click', () => {
  nav.classList.add('active');
  logo.classList.add('hidden');
  openBtn.classList.add('hidden');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  closeNavMenu();
});
