'use client'

import { ReactNode } from 'react'
import { queryClient } from './../../lib/queryclient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryComponentProps = {
  children: ReactNode
}

export function QueryComponent({ children }: QueryComponentProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}