

export const dynamic = 'force-dynamic';

async function PostPage() {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    const post = await fetch(`https://dummyjson.com/posts?limit=${randomNumber}`, 
    );
    const data = await post.json();
    return (
        <div>
            {data?.posts?.length && data?.posts?.map((curr, idx) => {
                return (
                    <div key={idx}>
                        {curr.title}
                    </div>
                )
            })}

        </div> 
    )
}

export default PostPage
