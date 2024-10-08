import React from 'react'
import Card from './Card'
import { data } from './data'
function Four() {
  return (
    <div className='mt-[8%] grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xxl:grid-cols-4 gap-10 md:gap-5 xl:gap-10 xxl:gap-5 xxxl:gap-10 px-[5%] md:px-[3%] xxl:px-[30px] xxxl:px-[60px]'>
      {data?.map((item: any) => {
        return (
          <Card title={item?.title} one={item?.one} two={item.two} three={item.three} link={item.link} darkGreen={item.darkGreen} />

        )
      })}
    </div>
  )
}

export default Four
