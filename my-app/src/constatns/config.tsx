import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const appConfig = {
  banner: {
    title: 'I am Jonathan Doe',
    text:
      'i,m Jonathan, professional web developer with long time \
    experience in this field​',
    image: '',
    bannerIcons: [{
      icon: <FaFacebookF className = 'headerIcon'/>,
    }, {
      icon: <FaTwitter className = 'headerIcon'/>,
    }, {
      icon: <FaInstagram className = 'headerIcon'/>,
    }],
  },

};