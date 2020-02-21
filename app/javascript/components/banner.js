import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Life's short, drink more..."],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };
