import { fetchComments } from './api';
import { useQuery } from '@tanstack/react-query';

import './PostDetail.css';

export function PostDetail({ post }) {
  const { data, isLoading } = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => fetchComments(post.id),
    staleTime: 2000,
    gcTime: 5000,
  });

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {isLoading
        ? 'Loading comments'
        : data.map((comment) => (
            <li key={comment.id}>
              {comment.email}: {comment.body}
            </li>
          ))}
    </>
  );
}
