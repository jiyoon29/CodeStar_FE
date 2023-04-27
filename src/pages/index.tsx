import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import * as S from '@/styles/styled';
import BaseLayout from '@/components/Layout/BaseLayout';
import IconHeart from '@/asset/img/IconHeart';
import { useQuery } from 'react-query';
import { getPosts } from '@/utils/requests';

export default function Home() {
  const { data } = useQuery('posts', getPosts);
  // console.log(data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout hasHeader>
        <S.MainContent>
          {data &&
            data.map((item) => {
              return (
                <S.MainContentItem
                  layout
                  key={item.postId}
                  initial={{
                    y: 10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                >
                  <Link href={{ pathname: `/post/${item.author.id}/${item.postId}` }}>
                    <div className="thumbnailContainer">
                      {item.thumbnail ? (
                        <img className="thumbnail" src={item.thumbnail} alt={item.title + 'Img'} />
                      ) : (
                        <div className="emptyThumbnail"></div>
                      )}
                    </div>
                  </Link>
                  <div className="itemBody">
                    <Link href={{ pathname: `/post/${item.author.id}/${item.postId}` }}>
                      <div className="itemPost">
                        <h4 className="postTitle">{item.title}</h4>
                        <p className="postContent">{item.content}</p>
                        <div className="subInfo">
                          {item.isPrivate}
                          <span>·</span>
                          <span>
                            {item.commentList?.length}
                            개의 댓글
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link href={{ pathname: `/blog/${item.author.id}` }}>
                      <div className="itemUser">
                        <div className="userProfileImg">
                          {item.author?.profileImg ? (
                            <img src={item.author?.profileImg} alt="user profile image" />
                          ) : (
                            <div></div>
                          )}
                        </div>
                        <div className="userName">
                          <span>by</span> <p>{item.author?.userName}</p>
                        </div>
                        <div className="postLikes">
                          <IconHeart />
                          <span>{item.likes?.length}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </S.MainContentItem>
              );
            })}
        </S.MainContent>
      </BaseLayout>
    </>
  );
}
