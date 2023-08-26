import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { aquaGreenHex, customMarkdownOptions } from "../lib/constants"
import { ReactComponentElement } from "react";
import { ContentfulRichText } from "@/lib/types";
import Link from "next/link";
import { Arrow } from "@/lib/svgs/Arrow";

type CardComponentProps = {
  className: string;
  icon: ReactComponentElement<any>;
  title: string;
  body: ContentfulRichText
  link: string;
  bgColor: string;
  titleColor: string;
}

export const Card = ({ className, icon, title, body, link, bgColor, titleColor, }: CardComponentProps) => {
  return (<Link className={`block w-8/12 md:w-1/4 ${className}`} href={link}><div className={`flex flex-col items-start w-full h-auto p-3 mx-auto mb-4 shadow-2xl md:h-full`}>
      <div className="w-1/3 h-full m-auto md:w-1/2 md:mb-5 grow-0">{icon}</div>
      <h3 className='w-full text-xl text-center grow-0 md:text-left md:mb-2'>{title}</h3>
      <div className='hidden grow md:block md:mb-2'>
      {
                documentToReactComponents(body.json, customMarkdownOptions(body))
      }
      </div>
      <button className={`py-1 px-3 grow-0 text-l hidden md:block border border-white ${bgColor === 'white' ? 'bg-aqua-green text-white' : bgColor === 'aqua-green' ? 'bg-white text-aqua-green' : 'bg-aqua-blue text-white'}`}>Read more 
      {<Arrow className={'w-2 inline-block mb-1 mt-1 ml-2 rotate-40'}></Arrow>}</button>
    </div></Link>)
}