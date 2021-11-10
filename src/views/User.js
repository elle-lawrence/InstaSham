import React from 'react';
import { PostGrid, ProfileInfo } from '../components/instasham-design-system';
import POSTJSON from '../sample_json/posts.json';

export default function User() {
  return (
    <>
      <h2>ProfileInfo</h2>
      <ProfileInfo
        postsCount={10}
        followerCount={10}
        followingCount={10}
        fullName="test"
        bio="asdasdasdasd"
        isUser={false}
      />

      <h2>PostGrid</h2>
      <PostGrid posts={Object.values(POSTJSON)} />
    </>
  );
}
