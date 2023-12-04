'use client'
import Header from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { useState } from 'react';
import './homepage.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link';

export default function Home() {
  const [menuToggler, setMenuToggler] = useState(false);
  

  return (
    <main>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
      <section className='landing'>
      <div className='landing-left'>
        <div className='landing-left_first'>
          <h1>FOR EVERYONE BUT<b/> NOTANYONE</h1>
          <p>Harmony in Sound, Vision, and Words: Crafting a Symphony of Creativity.</p>
          <Link href='auth/register'>Sign me up <i className="bi bi-arrow-right-short"></i></Link>
        </div>
        <div className='small-cards-container'>
        <div className='small-cards-container-item' style={{ backgroundImage: 'url(https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/281114696_2813984552239648_6105235835475739839_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEn5bLD3eF5ZaQLDyoUO4snfFIDIP26JAN8UgMg_bokA2OZERTxwyeANb3vESv1uia1ioA-E10WFs1hlWs1QyVI&_nc_ohc=txS9dkg2sHwAX-K423y&_nc_ht=scontent-jnb1-1.xx&cb_e2o_trans=t&oh=00_AfA7tEC3urfMjeoF5wAUjgZq5ZDOaKHHeh3wZt-7OdsX8g&oe=65721CD7)'}}>
          <div>
            <h2>Photography</h2>
            <i className="bi bi-arrow-up-right-circle-fill"></i>
          </div>
        </div>
        <div className='small-cards-container-item' style={{ backgroundImage: 'url(https://www.linearity.io/blog/content/images/2022/03/610963083219da6a0a00ccb6_Cover-Dark-2.png)'}}>
          <div>
          <h2>Blog</h2>
          <i className="bi bi-arrow-up-right-circle-fill"></i>
          </div>
        </div>
        </div>
      </div>
      <div className='landing-right' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80)'}}>
        <div>
          <h1>Music</h1>
          <i className="bi bi-arrow-up-right-circle-fill"></i>
        </div>
      </div>
      </section>
    </main>
  )
}
