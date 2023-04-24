import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/Button';
import * as S from '@/styles/writeModalStyled';

const WriteModal = (props) => {
  const title = props.title[0];
  const setTitle = props.title[1];
  const thumbnail = props.thumbnail[0];
  const setThumbnail = props.thumbnail[1];
  const accessibility = props.accessibility[0];
  const setAccessibility = props.accessibility[1];
  const isClicked = props.isClicked[0];
  const setIsClicked = props.isClicked[1];
  const isSubmitBtnClicked = props.isSubmitBtnClicked[0];
  const setIsSubmitBtnClicked = props.isSubmitBtnClicked[1];
  const uploadPost = props.uploadPost;
  const setCreatedAt = props.setCreatedAt;

  const uploadThumbnail = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setThumbnail(reader.result as string);
      console.log(reader.result);
    };
    console.log(e.target.files[0]);
  };

  return (
    <>
      <S.Background>
        <S.Container>
          <div className="item">
            <h3>포스트 썸네일</h3>
            {thumbnail && (
              <div
                onClick={() => {
                  setThumbnail('');
                }}
              >
                제거
              </div>
            )}
            <div className="thumbnailContainer">
              {thumbnail ? (
                <Image src={thumbnail} alt="thumbnail" fill object-fit="cover" />
              ) : (
                <div className="emptyThumbnail">
                  <svg width="107" height="85" fill="none" viewBox="0 0 107 85">
                    <path
                      fill="#868E96"
                      d="M105.155 0H1.845A1.844 1.844 0 0 0 0 1.845v81.172c0 1.02.826 1.845 1.845 1.845h103.31A1.844 1.844 0 0 0 107 83.017V1.845C107 .825 106.174 0 105.155 0zm-1.845 81.172H3.69V3.69h99.62v77.482z"
                    ></path>
                    <path
                      fill="#868E96"
                      d="M29.517 40.84c5.666 0 10.274-4.608 10.274-10.271 0-5.668-4.608-10.276-10.274-10.276-5.665 0-10.274 4.608-10.274 10.274 0 5.665 4.609 10.274 10.274 10.274zm0-16.857a6.593 6.593 0 0 1 6.584 6.584 6.593 6.593 0 0 1-6.584 6.584 6.591 6.591 0 0 1-6.584-6.582c0-3.629 2.954-6.586 6.584-6.586zM12.914 73.793a1.84 1.84 0 0 0 1.217-.46l30.095-26.495 19.005 19.004a1.843 1.843 0 0 0 2.609 0 1.843 1.843 0 0 0 0-2.609l-8.868-8.868 16.937-18.548 20.775 19.044a1.846 1.846 0 0 0 2.492-2.72L75.038 31.846a1.902 1.902 0 0 0-1.328-.483c-.489.022-.95.238-1.28.6L54.36 51.752l-8.75-8.75a1.847 1.847 0 0 0-2.523-.081l-31.394 27.64a1.845 1.845 0 0 0 1.22 3.231z"
                    ></path>
                  </svg>
                  <input
                    // ref={thumbnailRef}
                    onChange={uploadThumbnail}
                    accept="image/*"
                    type="file"
                    id="uploadBtn"
                    name="uploadBtn"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="uploadBtn">썸네일 업로드</label>
                </div>
              )}
            </div>
            <h4>{title}</h4>
          </div>
          <div className="item">
            <h3>공개 설정</h3>
            <div className="buttons">
              <Button
                onClick={() => {
                  setAccessibility(true);
                }}
              >
                전체공개
              </Button>
              <Button
                onClick={() => {
                  setAccessibility(false);
                }}
              >
                비공개
              </Button>
            </div>
          </div>
          <div className="item">
            <div className="buttons">
              <Button
                onClick={() => {
                  setIsClicked(false);
                }}
              >
                <span>취소</span>
              </Button>
              <Button onClick={uploadPost}>
                <span>출간하기</span>
              </Button>
            </div>
          </div>
        </S.Container>
      </S.Background>
    </>
  );
};

export default WriteModal;
