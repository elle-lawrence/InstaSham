import React, { useEffect } from 'react';
import { PostGrid, ProfileInfo } from '../components/instasham-design-system';
import {
  getCurrentUsersUid,
  getUserByUid,
  signOutUser,
} from '../helpers/userHelper';
import POSTJSON from '../sample_json/posts.json';

export default function User() {
  useEffect(() => {
    let isMounted = true;
    console.warn(getCurrentUsersUid());
    getUserByUid(getCurrentUsersUid()).then((userInfo) => {
      if (isMounted) console.warn(userInfo);
    });
    return () => {
      isMounted = false;
    };
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
      <button type="button" className="btn-danger btn" onClick={signOutUser}>
        <i className="fas fa-sign-out-alt" />
      </button>

      <PostGrid posts={Object.values(POSTJSON)} />
    </>
  );
}
