import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_protected/profile')({
  component: () => <div>Hello /_layout/_protected/profile!</div>
})