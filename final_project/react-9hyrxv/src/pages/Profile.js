import React from 'react';

export default function Profile(item) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* a single box for the artist */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: 'auto',
          backgroundColor: 'goldenrod',
          borderRadius: '5%',
        }}
      >
        <div
          style={{
            width: '30%',
            textAlign: 'center',
          }}
        >
          <img
            onMouseEnter={() => {
              document.querySelector('.one').style.display = 'block';
            }}
            onMouseLeave={() => {
              document.querySelector('.one').style.display = 'none';
            }}
            style={{
              borderRadius: '30%',
            }}
            src={item.artistone}
            alt={item.artistonealt}
          />
        </div>

        <div
          className="one"
          style={{
            display: 'none',
          }}
        >
          <h1>{item.nameone}</h1>
          <p>{item.bioone}</p>
        </div>
      </div>

      {/* a single box for the artist */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: 'auto',
          backgroundColor: 'goldenrod',
          borderRadius: '5%',
        }}
      >
        <div
          style={{
            width: '30%',
            textAlign: 'center',
          }}
        >
          <img
            onMouseEnter={() => {
              document.querySelector('.two').style.display = 'block';
            }}
            onMouseLeave={() => {
              document.querySelector('.two').style.display = 'none';
            }}
            style={{
              borderRadius: '30%',
            }}
            src={item.artisttwo}
            alt={item.artisttwoalt}
          />
        </div>

        <div
          className="two"
          style={{
            display: 'none',
          }}
        >
          <h1>{item.nametwo}</h1>
          <p>{item.biotwo}</p>
        </div>
      </div>

      {/* a single box for the artist */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: 'auto',
          backgroundColor: 'goldenrod',
          borderRadius: '5%',
        }}
      >
        <div
          style={{
            width: '30%',
            textAlign: 'center',
          }}
        >
          <img
            onMouseEnter={() => {
              document.querySelector('.three').style.display = 'block';
            }}
            onMouseLeave={() => {
              document.querySelector('.three').style.display = 'none';
            }}
            style={{
              borderRadius: '30%',
            }}
            src={item.artistthree}
            alt={item.artistthreealt}
          />
        </div>

        <div
          className="three"
          style={{
            display: 'none',
          }}
        >
          <h1>{item.namethree}</h1>
          <p>{item.biothree}</p>
        </div>
      </div>

      {/* a single box for the artist */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: 'auto',
          backgroundColor: 'goldenrod',
          borderRadius: '5%',
        }}
      >
        <div
          style={{
            width: '30%',
            textAlign: 'center',
          }}
        >
          <img
            onMouseEnter={() => {
              document.querySelector('.four').style.display = 'block';
            }}
            onMouseLeave={() => {
              document.querySelector('.four').style.display = 'none';
            }}
            style={{
              borderRadius: '30%',
            }}
            src={item.artistfour}
            alt={item.artistfouralt}
          />
        </div>

        <div
          className="four"
          style={{
            display: 'none',
          }}
        >
          <h1>{item.namefour}</h1>
          <p>{item.biofour}</p>
        </div>
      </div>
    </div>
  );
}
