import Link from "next/link";
import { PostMetadata } from "@/components/postMetadata";

function formatDate(date: string) {
    const dateObj = new Date(date);
    const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(dateObj);
    return formattedDate;
}

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-200 p-4 rounded-md shadow-md
        bg-white">
            <Link href={`/posts/${props.slug}`}>
                <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
            </Link>
            <p className="text-sm text-slate-400">{formatDate(props.date)}</p>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
}

export default PostPreview;