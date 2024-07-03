
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/postPreview";



//TODO: revalidate fetches data every 60 seconds for now
export const revalidate = 10;


export default async function HomePage () {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);


  const postPreviews = allPosts.map((post, index) => 
    <PostPreview  key={post.slug} 
      title={post.title}
      date={post.date}
      subtitle={post.excerpt}
      slug={post.slug}  />
  );

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
}
