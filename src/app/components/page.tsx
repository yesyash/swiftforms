import { Button } from "@/components/base"

type ComponentGroupProps = {
  title: string;
  children: React.ReactNode;
}

const ComponentGroupWrapper = ({ title, children }: ComponentGroupProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="flex items-center flex-wrap gap-4">
        {children}
      </div>
    </div>
  )
}

const ComponentsPage = () => {
  return (
    <div className="m-8">
      <ComponentGroupWrapper title="Buttons">
        <Button>
          Get started—it&apos;s free
        </Button>

        <Button variant="destructive">
          Delete form
        </Button>

        <Button variant="outline">
          Log In
        </Button>

        <Button variant="secondary">
          Secondary action button
        </Button>

        <Button variant="ghost">
          Ghost button
        </Button>

        <Button variant="link">
          A legit link
        </Button>
      </ComponentGroupWrapper>
    </div>
  )
}

export default ComponentsPage
