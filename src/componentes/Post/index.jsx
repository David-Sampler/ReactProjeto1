import PostCard from '../PostCard/index'

export const Posts = ({posts}) => {
  return (
    <div className='posts'>
      
      {posts.map(post => (
        <PostCard
          cover={post.cover}
          alt={post.title}
          key={post.id}
          title={post.title}
          body={post.body}
        />

      ))}
    </div>
  )
}