import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { Handle, Position } from '@xyflow/react'


import { cn } from "@/lib/utils"

const Slider = (({ className, ...props }, ref) => {

  // const normalizeValue = React.useCallback((value) => value / 100 * 100)

  const nodeStyle = {
    node: {
      height: '50px',
      border: '1px solid #eee',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '3px',
      background: 'white',
      width: '128px',
    },
    label: {
      display: 'flex',
      color: '#777',
      fontSize: '9px',
    },
    bar: {
      // width: `${normalizeValue(value)}%`,
      width: '50%',
      backgroundColor: 'gray',
      height: '30px',
      marginTop: '5px',
      marginBottom: '5px',
    }
  }

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        // isConnectable={isConnectable}
      />
      <div style={nodeStyle.node}>
        <label htmlFor="text" style={nodeStyle.label}>dummy</label>
        <SliderPrimitive.Root
          // ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-50" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300" />
        </SliderPrimitive.Root>
      </div>
    </>
  )
})


Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
