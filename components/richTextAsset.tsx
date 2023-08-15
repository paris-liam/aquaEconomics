import Image from 'next/image'
import ContentfulImage from './ContentfulImage'

export default function RichTextAsset({ id, assets }: any) {
  const asset = assets?.find((asset: any) => asset.sys.id === id)

  if (asset?.url) {
    return <ContentfulImage src={asset.url} height={asset.height} width={asset.width} alt={asset.title} />
  }

  return null
}
