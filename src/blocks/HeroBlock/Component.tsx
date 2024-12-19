import { CMSLink } from '@/components/CMSLink'
import { Page } from '@/payload-types'
import Image from 'next/image'
import React from 'react'
// import { CMSLink } from "../../Link";

export const HeroBlock: React.FC<Extract<Page['layout'][number], { blockType: 'heroBlock' }>> = (
  props,
) => {
  const { title, links, description, logo } = props

  return (
    <div className="container flex flex-col text-center items-center">
      {logo && <Image src={logo.url} alt={logo.alt} className="w-20 h-20 mx-auto mb-4" />}
      <h1 className="text-4xl lg:text-6xl font-bold !leading-normal">{title}</h1>
      <p
        className="text-gray-400 text-2xl mt-10 lg:w-1/2 font-light"
        dangerouslySetInnerHTML={{ __html: description || '' }}
      />
      <div className="mt-14">
        {links?.map(({ link }, index) => {
          return <CMSLink key={index} size="large" {...link} />
        })}
      </div>
      <div className="mt-28">{/* <VideoTrigger /> */}</div>
    </div>
  )
}
