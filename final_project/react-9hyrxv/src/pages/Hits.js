import React from 'react';

export default function Hits(item) {
  return (
    <div>
      <div>
        <h2>{item.name}</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        }}
      >
        <div>
          <div>
            <img src={item.srcone} alt={item.altone} />
            <div
              style={{
                marginTop: '16px',
                marginBottom: '16px',
              }}
            >
              <a
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                {item.titleone}
              </a>
            </div>
          </div>

          <div>
            <p>{item.bioone}</p>
          </div>
        </div>

        <div>
          <img src={item.srctwo} alt={item.alttwo} />

          <p>{item.titletwo}</p>
        </div>

        <div>
          <img src={item.srcthree} alt={item.altthree} />

          <p>{item.titlethree}</p>
        </div>

        <div>
          <img src={item.srcfour} alt={item.altfour} />

          <p>{item.titlefour}</p>
        </div>

        <div>
          <img src={item.srcfive} alt={item.altfive} />

          <p>{item.titlefive}</p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
        }}
      >
        <p>{item.bio}</p>
      </div>
    </div>
  );
}
