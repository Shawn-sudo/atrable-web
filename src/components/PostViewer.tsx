import React from "react";

type Post = {
  id: string;
  content: PostContent;
  additionalData: PostAdditionalData;
};

type PostContent = {
  audio?: string;
  text?: string;
  photos?: string[];
};

type PostAdditionalData = {
  created?: Date;
  audioCreated?: Date;
  uploader?: string;
  // visibility?:
  // reactions?:
  // viewCount?:
};

type Props = {
  postId: string;
};

function PostViewer(props: Props) {
  return (
    <div
      style={{
        boxShadow: "var(--shadow-small)",
        borderRadius: 20,
        margin: 10,
      }}
    >
      <PostTopBar
        post={{
          id: props.postId,
          content: {
            audio: undefined,
            text: undefined,
            photos: undefined,
          },
          additionalData: {
            created: undefined,
            audioCreated: undefined,
            uploader: undefined,
          },
        }}
      />
      <PostContentViewer
        post={{
          id: props.postId,
          content: {
            audio: undefined,
            text: undefined,
            photos: undefined,
          },
          additionalData: {
            created: undefined,
            audioCreated: undefined,
            uploader: undefined,
          },
        }}
      />
    </div>
  );
}

type PostTopBarProps = {
  post: Post;
};
function PostTopBar(props: PostTopBarProps) {
  return <div style={{ width: 400, maxWidth: "100vw", height: 150 }}></div>;
  //   return <div>todo: PostTopBar for {props.post.id}</div>;
}

type PostContentViewerProps = {
  post: Post;
};
function PostContentViewer(props: PostContentViewerProps) {
  return <div></div>;
  //   return <div>todo: PostContentViewer for {props.post.id}</div>;
}

export default PostViewer;
