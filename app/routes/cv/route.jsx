import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { CV } from './cv';

export const meta = () => {
  return baseMeta({
    title: 'CV — Othman Al Bakri',
    description: 'The curriculum vitae of Othman Al Bakri — a software engineer specializing in AI, machine learning, and full-stack development.',
  });
};

export default function CVPage() {
  return (
    <>
      <CV />
      <Footer />
    </>
  );
} 