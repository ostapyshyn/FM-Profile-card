import React from 'react';

import victor from '../../assets/img/image-victor.jpg';
import { CardBackground } from '../../assets/svg/svg-icons';
import { BottomBackground } from '../../assets/svg/svg-icons';

import styles from './ProfileCard.module.scss';

function ProfileCard() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <CardBackground />
        <div className={styles.image}>
          <img src={victor} alt="qr" />
        </div>

        <h1>
          Victor Crest <span>26</span>
        </h1>
        <h2>London</h2>
        <hr />
        <div className={styles.info}>
          <div>
            <p className={styles.number}>80K</p>
            <p className={styles.category}>Followers</p>
          </div>
          <div>
            <p className={styles.number}>803K</p>
            <p className={styles.category}>Likes</p>
          </div>
          <div>
            <p className={styles.number}>1.4K</p>
            <p className={styles.category}>Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileCard;
