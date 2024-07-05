import ContentfulImage from "@/components/contentful-image";

export default function PostImage({
  url
}: {
  title?: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <ContentfulImage
      priority
      width={1024}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      src={url}
    />
  );

  return image;
}
