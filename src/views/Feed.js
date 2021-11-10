import React from 'react';
import { PostDetailsCard } from '../components/instasham-design-system';
import POSTJSON from '../sample_json/posts.json';

export default function Feed() {
  return (
    <>
      <h2>PostDetailsCard</h2>
      <PostDetailsCard postInfo={Object.values(POSTJSON)[0]} />
    </>
  );
}
