import Image from 'next/image'

export default function RichTextAsset({ id, assets }: any) {
  const asset = assets?.find((asset: any) => asset.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />
  }

  return null
}
