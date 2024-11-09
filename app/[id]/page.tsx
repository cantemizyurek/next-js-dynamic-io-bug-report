'use cache'

import { DisplayId } from './components'
import { Suspense } from 'react'
export default async function Page({
  ...props
}: {
  params: Promise<{ id: string }>
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DisplayId params={props.params} />
    </Suspense>
  )
}
