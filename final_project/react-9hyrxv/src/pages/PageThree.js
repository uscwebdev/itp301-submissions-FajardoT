import React from 'react';
import Playlist from './Playlist.js';

const PageThree = () => {
  return (
    <div>
      <div>
        <h1>Mood Playlists</h1>
        <p>
          Enjoy some songs from some of the artists based on what mood you want
          to experiment with.
        </p>
      </div>
      <div className="playlists">
        <Playlist
          title="Eladio's Playlist for the Gym"
          one="THUNDER Y LIGHTNING"
          two="Mbappe"
          three="Si La Calle Llama - Remix"
          four="Si Salimos"
          five="Tata - Remix"
          six="Nube"
          seven="Eladio Carrion: Bzrp Music Sessions, Vol. 40"
          eight="5 Star"
          nine="Problema"
          ten="Jovenes Millonarios"
          eleven="Como Sea"
          twelve="Socio"
          thirteen="Mami Dijo"
          fourteen="Sauce Boy Freesyle 3"
          fifteen="Hugo"
        />

        <Playlist
          title="Young Miko's Party Playlist"
          one="Classy 101"
          two="Chulo pt.2"
          three="wiggy"
          four="DISPO"
          five="ID"
          six="105 Freestyle"
          seven="Vendetta"
          eight="Puerto Rican Mami"
          nine="2seater"
          ten="Bi"
          eleven="Riri"
          twelve="Trending"
          thirteen="Lisa"
          fourteen="Katana"
          fifteen="Kilimanjaro"
        />
        <Playlist
          title="Sad Bunny's Late Night Playlist"
          one="NI BIEN NI MAL"
          two="Amorfoda"
          three="RLNDT"
          four="Un Verano Sin Ti"
          five="Soy Peor"
          six="LA DROGA"
          seven="HACIENDO QUE ME AMAS"
          eight="BABY NUEVA"
          nine="Dime Si Te Acuerdas"
          ten="Solo de Mi"
          eleven="Otra Noche en Miami"
          twelve="LA CANCIÓN"
          thirteen="Dos Mil 16"
          fourteen="Vete"
          fifteen="GRACIAS POR NADA"
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '70%',
          margin: 'auto',
        }}
        className="galley"
      >
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2023/06/Welcome-to-Young-Mikos-World.jpg?w=1581&h=1054&crop=1"
          alt="Young Miko"
        />
        <img
          src="https://www.billboard.com/wp-content/uploads/2023/04/Eladio-Carrion-cr-Gabriel-Perez-Silva-billboard-1548.jpg"
          alt="Eladio Carrion"
        />
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-09/230912-bad-bunny-al-0903-ddb1f9.jpg"
          alt="Bad Bunny"
        />
      </div>
    </div>
  );
};

export default PageThree;
