import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              K/DA
              <i className='far fa-heart' />
            </Link>
          </div>
          <small className='website-rights'>Nathalia Cecílio © 2020</small>
          <div className='social-icons'>
            
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/KDA_music/'
              target='_blank' rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/watch?v=RkID8_gnTxw'
              target='_blank' rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/KDA_music'
              target='_blank' rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/in/nathalia-siqueira-cecilio-a8043513b/'
              target='_blank' rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;