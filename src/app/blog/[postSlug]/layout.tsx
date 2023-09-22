import React from 'react'
import { REVALIDATE_TIME } from '@/config'

interface PostLayoutProps {
  children: React.ReactNode
}

export const revalidate = REVALIDATE_TIME

const PostLayout = (props: PostLayoutProps) => {
  const { children } = props
  return <div className='max-w-4xl container'>{children}</div>
}

export default PostLayout
