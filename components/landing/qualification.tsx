'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

import type getData from '@/actions/get-data';
import { slideInFromRight, slideInFromTop } from '@/lib/motion';
import QualificationCard from '@/components/landing/qualification-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type QualificationProps = Pick<
  Awaited<ReturnType<typeof getData>>,
  'education' | 'experience'
>;

export default function Qualification({
  education,
  experience
}: QualificationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      id='qualification'
      className='mt-32'
    >
      <motion.h1
        variants={slideInFromTop(0.3)}
        className='text-center text-sm text-muted-foreground font-medium'
      >
        Minha jornada pessoal
      </motion.h1>
      <motion.h2
        variants={slideInFromTop(0.4)}
        className='text-center text-3xl font-semibold pt-1'
      >
        Qualificações
      </motion.h2>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='w-full max-w-[810px] mx-auto pt-8'
      >
        <Tabs defaultValue='education' className='w-full'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='education'>Educação</TabsTrigger>
            <TabsTrigger value='experience'>Experiência</TabsTrigger>
          </TabsList>
          <TabsContent value='education'>
            <QualificationCard
              icon={GraduationCap}
              qualificationType='education'
              data={education}
            />
          </TabsContent>
          <TabsContent value='experience'>
            <QualificationCard
              icon={Briefcase}
              qualificationType='experience'
              data={experience}
            />
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.section>
  );
}
