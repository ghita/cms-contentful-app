import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import  { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Markdown  from "markdown-to-jsx";
import ContentfulImage from '@/components/contentful-image';
import PostImage from './post-image';


const CustomComponent = ({ title, description }: {title: string, description: string}) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function renderOptions(links:any): Options {
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset);
  }

  // create an entry block map
  const entryBlockMap = new Map();
  // loop through the entries and add them to the map

  for (const entry of links?.entries?.inline ?? []) {
    entryBlockMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      ["embedded-entry-inline"]: (node: any, children: any) => {
        // find the entry in the entryBlockMap by ID
        const entry = entryBlockMap.get(node.data.target.sys.id);
        return <Markdown>{entry.text}</Markdown>; 
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <PostImage url={asset.url}/>;
      },
    }
  }
}

export function RichText ({ richTextNode } : {richTextNode: any} ) {
    return <>{documentToReactComponents(richTextNode.json, renderOptions(richTextNode.links))}</>;
}
