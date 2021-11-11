import React, { useEffect } from 'react';
import { PostGrid, ProfileInfo } from '../components/instasham-design-system';
import { getCurrentUsersUid, getUserByUid } from '../helpers/userHelper';
import POSTJSON from '../sample_json/posts.json';

export default function User() {
  useEffect(() => {
    let isMounted = true;
    console.warn(getCurrentUsersUid());
    getUserByUid(getCurrentUsersUid()).then((userInfo) => { if (isMounted) console.warn(userInfo); });
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      <ProfileInfo
        postsCount={10}
        followerCount={10}
        followingCount={10}
        fullName="test"
        bio="asdasdasdasd"
        isUser={false}
      />

      <PostGrid posts={Object.values(POSTJSON)} />
    </>
  );
}
