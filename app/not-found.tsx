import { Badge, Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-32 text-center md:px-10">
      <Badge>404</Badge>
      <h1 className="display mx-auto mt-6 max-w-2xl text-5xl md:text-7xl">This page is not available</h1>
      <p className="mx-auto mt-5 max-w-md text-[16px] leading-7 text-muted">
        The link may be out of date. Return home or speak with the team about UAE market entry.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
