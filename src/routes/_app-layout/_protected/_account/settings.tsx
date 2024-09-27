import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app-layout/_protected/_account/settings')({
  component: () => <div>Hello /_app-layout/_protected/_account/settings!</div>
})