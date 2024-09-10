import { FC, ReactNode } from 'react';
import './Section.scss';

interface SectionProps {
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className='section'>
      {children}
    </section>
  );
};

export default Section;
