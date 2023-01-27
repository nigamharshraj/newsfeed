/*import React, { useState } from 'react';

function NewsCard() {
  const [headline, setHeadline] = useState('');
  const [comment, setComment] = useState('');

  function handleHeadlineChange(e) {
    setHeadline(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  return (
    <div>
      <h3>{headline}</h3>
      <input type="text" placeholder="" onChange={handleHeadlineChange} />
      <br />
      <textarea placeholder="Enter comment" onChange={handleCommentChange} />
      <br />
      <button onClick={() => alert(`Comment: ${comment}`)}>Post Comment</button>
    </div>
  );
}

export default NewsCard;
*/


import React, { useState, useEffect } from 'react';
import { getHeadline } from './api';

function NewsCard() {
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    const fetchHeadline = async () => {
      const fetchedHeadline = await getHeadline();
      setHeadline(fetchedHeadline);
    };
    fetchHeadline();
  }, []);

  return (
    <div className="card">
      <h3>{headline}</h3>
      <form>
        <input type="text" placeholder="Name" />
        <textarea placeholder="Add your comment"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewsCard;



