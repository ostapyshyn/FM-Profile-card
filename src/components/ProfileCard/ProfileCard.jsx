import React from 'react';

import victor from '../../assets/img/image-victor.jpg';
import { CardBackground } from '../../assets/svg/svg-icons';
// import background from '../../assets/svg/background.svg';

import styles from './ProfileCard.module.scss';

function ProfileCard() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        {/* <img src={background} alt="background" /> */}
        <CardBackground />
        <img src={victor} alt="qr" />
        <h1>Victor Crest 26</h1>
        <h2>London</h2>
        <hr />
        <p>803K Likes</p>
        <p>Followers 803K</p>
        <p>1.4K Photos</p>
      </div>
    </main>
  );
}

export default ProfileCard;
