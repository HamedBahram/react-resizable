'use client'

import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

export default function Resizable() {
  return (
    <PanelGroup
      autoSaveId='example'
      direction='horizontal'
      className='mt-16 min-h-60 rounded-lg border'
    >
      <Panel defaultSize={25}>
        <div className='flex h-full items-center justify-center bg-pink-100 p-6'>
          <span className='font-semibold'>Sidebar</span>
        </div>
      </Panel>

      <PanelResizeHandle className='flex w-px items-center justify-center bg-white'>
        <div className='z-10 flex h-6 w-4 items-center justify-center rounded-sm border bg-zinc-200'>
          <DragHandleDots2Icon className='h-4 w-4' />
        </div>
      </PanelResizeHandle>

      <Panel defaultSize={25}>
        <div className='flex h-full items-center justify-center bg-pink-100 p-6'>
          <span className='font-semibold'>Content</span>
        </div>
      </Panel>
    </PanelGroup>
  )
}
