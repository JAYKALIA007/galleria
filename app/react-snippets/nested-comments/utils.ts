export const MOCK_COMMENTS_DATA = [
  {
    id: "1",
    comment: "This is a comment",
    replies: [
      {
        id: "2",
        comment: "This is a child comment",
        replies: [
          {
            id: "3",
            comment: "This is a grandchild comment",
            replies: [],
          },
          {
            id: "3",
            comment: "This is another grandchild comment",
            replies: [],
          },
        ],
      },
    ],
  },
];

export const NESTED_COMMENTS_GITHUB_URL = `https://github.com/JAYKALIA007/galleria/blob/master/app/react-snippets/nested-comments/NestedCOmments.tsx`;

export type CommentsType = Array<{
  id: string;
  comment: string;
  replies: CommentsType | [];
}>;

export const updateComments = (
  comments: CommentsType,
  commentId: string,
  newReply: CommentsType[0]
): CommentsType => {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return {
        ...comment,
        replies: [...comment.replies, newReply],
      };
    } else if (comment.replies.length > 0) {
      return {
        ...comment,
        replies: updateComments(comment.replies, commentId, newReply),
      };
    } else {
      return comment;
    }
  });
};
