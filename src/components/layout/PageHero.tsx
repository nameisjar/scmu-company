import type { ReactNode } from "react";
import { Container } from "../ui/Container";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
  context?: string;
};

export function PageHero({ title, description, children, context }: Props) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero__copy">
          {context && <p className="page-hero__context">{context}</p>}
          <h1>{title}</h1>
          <p>{description}</p>
          {children && <div className="hero-actions">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
