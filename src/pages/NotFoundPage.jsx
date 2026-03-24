import { Link } from 'react-router-dom'
import { Button } from 'A/components/ui/button'

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
      <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </main>
  )
}
