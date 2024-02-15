import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const EmptyBoard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
        <Image
        src="/note.svg"
        height={140}
        width={140}
        alt="empty"
        />
        <h2 className="text-2xl font-semibold mt-6">Create Your First Board!</h2>
        <p className="text-muted-foreground text-sm mt-2">
            Start by creating a board to manage your organization!
        </p>
        <div className="mt-6">
            <Button size="lg">
              Create Board
            </Button>
        </div>
    </div>
  )
}

export default EmptyBoard