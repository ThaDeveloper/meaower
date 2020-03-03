import React, { useState } from 'react';

import '../styles/tabs.css';
import Votes from './Votes';

export default function VotesTabs() {
  const [selected, setSelected] = useState('likes');
  return (
    <>
      <div className='tabs'>
        <button onClick={() => setSelected('likes')}>Liked</button>
        <button onClick={() => setSelected('dislikes')}>Disliked</button>
      </div>
      <Votes selected={selected} />
    </>
  );
}
