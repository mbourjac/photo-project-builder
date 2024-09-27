import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app-layout/_protected/_account/profile')({
  component: () => <div>Hello /_app-layout/_protected/_account/profile!</div>
})