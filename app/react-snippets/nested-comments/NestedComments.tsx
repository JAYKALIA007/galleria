"use client";

import { ButtonComponent } from "@/app/design-system/button/ButtonComponent";
import {
  ButtonSizeVariantType,
  ButtonThemeVariantType,
} from "@/app/design-system/button/types";
import { Input } from "@/components/ui/input";
import { uuidv4 } from "@/lib/utils";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  CommentsType,
  MOCK_COMMENTS_DATA,
  NESTED_COMMENTS_GITHUB_URL,
  updateComments,
} from "./utils";
import { SlideInAnimationContainer } from "@/app/components/SlideInAnimationContainer";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const NestedComments = () => {
  const [comments, setComments] = useState<CommentsType>(MOCK_COMMENTS_DATA);
  const [newComment, setComment] = useState("");

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    const addedComment = {
      id: uuidv4(),
      comment: newComment,
      replies: [],
    };
    setComments((prev) => [...prev, addedComment]);
    setComment("");
  };

  return (
    <SlideInAnimationContainer>
      <div className="text-xs md:text-sm flex flex-col gap-8">
        <div className="my-2 leading-6">
          An implementation of a nested comments feature like Reddit&apos;s
          comments. This supports n-level nested comments.
        </div>
        <div className="flex justify-end">
          <Link href={NESTED_COMMENTS_GITHUB_URL} target="_blank">
            <ButtonComponent
              theme={ButtonThemeVariantType.SECONDARY}
              size={ButtonSizeVariantType.SM}
            >
              <GitHubLogoIcon />
              <span>Code</span>
            </ButtonComponent>
          </Link>
        </div>

        <div>
          <div className="flex gap-2">
            <Input
              value={newComment}
              onChange={handleChangeComment}
              type="text"
              placeholder="Add a comment..."
            />
            <ButtonComponent
              theme={ButtonThemeVariantType.OUTLINE}
              onClick={handleAddComment}
              disabled={!newComment}
            >
              Add
            </ButtonComponent>
          </div>
          <div>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                comments={comments}
                onChange={setComments}
                isParent
              />
            ))}
          </div>
        </div>
      </div>
    </SlideInAnimationContainer>
  );
};

const Comment = React.memo(
  ({
    comment,
    comments,
    onChange,
    isParent,
  }: {
    comment: CommentsType[0];
    comments: CommentsType;
    onChange: (comments: CommentsType) => void;
    isParent: boolean;
  }) => {
    const [reply, setReply] = useState("");
    const [showReplyTextBox, setShowReplyTextBox] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const hasReplies = useMemo(
      () => (comment.replies && comment.replies.length > 0) || false,
      [comment.replies]
    );

    const handleChangeReply = (e: React.ChangeEvent<HTMLInputElement>) => {
      setReply(e.target.value);
    };

    const handleAddReply = useCallback(() => {
      const addedReply: CommentsType[0] = {
        id: uuidv4(),
        comment: reply,
        replies: [],
      };

      const updatedComments = updateComments(comments, comment.id, addedReply);
      onChange(updatedComments);
      setShowReplyTextBox(false);
      setReply("");
    }, [comment.id, comments, onChange, reply]);

    return (
      <div
        className={`ml-1 p-4 ${
          !isParent && "border-l border-gray-200 dark:border-gray-800"
        }`}
      >
        <div className="flex gap-2 items-center">
          <div>{comment.comment}</div>
          {!showReplyTextBox && (
            <button
              onClick={() => setShowReplyTextBox(true)}
              className="text-[10px] hover:underline underline-offset-4 text-blue-500"
            >
              Reply
            </button>
          )}
        </div>
        {showReplyTextBox && (
          <SlideInAnimationContainer>
            <div className="flex gap-4 items-center p-4">
              <Input
                value={reply}
                onChange={handleChangeReply}
                placeholder="Add a reply..."
                ref={inputRef}
              />
              <ButtonComponent
                onClick={handleAddReply}
                theme={ButtonThemeVariantType.OUTLINE}
                size={ButtonSizeVariantType.XS}
                disabled={!reply}
              >
                Reply
              </ButtonComponent>
            </div>
          </SlideInAnimationContainer>
        )}
        {hasReplies &&
          comment.replies.map((reply) => (
            <MemoizedComment
              key={reply.id}
              comment={reply}
              comments={comment.replies}
              onChange={(updatedReplies) => {
                const updatedComments = comments.map((currComment) =>
                  currComment.id === comment.id
                    ? { ...comment, replies: updatedReplies }
                    : currComment
                );

                onChange(updatedComments);
              }}
              isParent={false}
            />
          ))}
      </div>
    );
  }
);

Comment.displayName = "Comment";

const MemoizedComment = React.memo(Comment);

export default NestedComments;
