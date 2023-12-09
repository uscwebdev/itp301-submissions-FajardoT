import React from 'react';
import Profile from './Profile.js';

const PageOne = () => {
  return (
    <div>
      <p>Hover over the artists to figure out who they are</p>
      <Profile
        artistone="https://api.mapsound.ar/StaticFiles/48abe7e0-36e5-435a-b49a-db85b0368b26.jpg"
        artistonealt="Eladio Carrion"
        nameone="Eladio Carrion"
        bioone="Eladio Carrion has demosntrated to be one of the mainstays of the latin trap genre with his consistency of music. Typically you see many artists dive into other genres that might be considered more mainstream but Eladio has been able to maintain a loyal fanbase over the years. Although some might believe this could limit the reach you could get to, it's clear that he's been able to grow within the genre and shows no signs of slowing down."
        artisttwo="https://photo-resize-zmp3.zmdcdn.me/w256_r1x1_jpeg/cover/d/7/4/9/d749c88cb781745be1050819a16d128d.jpg"
        artisttwoalt="Dei V"
        nametwo="Dei V"
        biotwo="Dei V has recently been on the rise and is being considered as one of the leaders of the new generation of artists coming out of Puerto Rico. With co-signs from artists like Bad Bunny and collaborations with major artists such as Karol G, Dei V is showing no signs of slowing down anytime soon. With songs like 'VVS' and 'Quien Es Dei V?', Dei V demonstrates he'll be able to adapt to new waves of music that come around in the upcoming years."
        artistthree="https://socialcounts.org/_next/image?url=https%3A%2F%2Fwww.banner.yt%2FUCcsuP-RU90LNZBluSJNJXiQ%2Favatar%3Fwidth%3D640&w=256&q=75"
        artistthreealt="Young Miko"
        namethree="Young Miko"
        biothree="I haven't seen an artists blow up as much as Young Miko has in the past year and a half. Starting off with smaller shows in Puerto Rico, she's recently coming off a tour in Latin America with consistent music coming out during the months on the road. She's been seen as one of the faces for women in the urban music scene the LGBTQ+ community has also put her in the hearts of fans in a genre that has been seen as place full of toxic masculinity."
        artistfour="https://firebase.soulectiontracklists.com/cdn/image/t_square_large/images/artists/bad-bunny.jpg"
        artistfouralt="Bad Bunny"
        namefour="Bad Bunny"
        biofour="Bad Bunny needs little to no introduction to the global stage, much less to the Latin trap scene. However, it is important to note the early stages of his career where he would be considered the face of genre and an inspiration for those that wanted to elevate the genre to a larger stage. Although he doesn't dive much into the genre anymore, his recent album had him show off his ability to collab with the fresh faces of Latin Trap and fulfilling the wishes of many of his fans who had been there from the start."
      />
    </div>
  );
};

export default PageOne;
