import React from 'react';

export default function Playlist(item) {
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div>
          <ul>
            <li>{item.one}</li>
            <li>{item.two}</li>
            <li>{item.three}</li>
            <li>{item.four}</li>
            <li>{item.five}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{item.six}</li>
            <li>{item.seven}</li>
            <li>{item.eight}</li>
            <li>{item.nine}</li>
            <li>{item.ten}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{item.eleven}</li>
            <li>{item.twelve}</li>
            <li>{item.thirteen}</li>
            <li>{item.fourteen}</li>
            <li>{item.fifteen}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
