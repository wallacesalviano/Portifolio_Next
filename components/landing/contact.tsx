'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import type getData from '@/actions/get-data';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/landing/icons';
import ContactForm from '@/components/landing/contact-form';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop
} from '@/lib/motion';

type ContactProps = Pick<Awaited<ReturnType<typeof getData>>, 'miscellaneous'>;

export default function Contact({ miscellaneous }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      id='contact'
      className='mt-32'
    >
      <motion.h1
        variants={slideInFromTop(0.3)}
        className='text-center text-sm text-muted-foreground font-medium'
      >
        Me mande uma mensagem!
      </motion.h1>
      <motion.h2
        variants={slideInFromTop(0.4)}
        className='text-center text-3xl font-semibold pt-1'
      >
        Contato
      </motion.h2>
      <div className='w-full max-w-xl lg:max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 pt-8'>
        <div className='lg:col-span-2 flex flex-col gap-6'>
          <motion.article
            variants={slideInFromLeft(0.3)}
            className='rounded-2xl bg-primary group hover:bg-primary-foreground transition-colors duration-300 ease-in-out border border-primary py-4 px-4 md:px-10'
          >
            <div className='flex flex-col items-center text-primary-foreground group-hover:text-primary'>
              <Icons.email className='w-7 h-7 invert group-hover:invert-0 dark:invert-0 dark:group-hover:invert' />
              <h3 className='text-lg font-medium pt-4'>Email</h3>
              <h4 className='text-sm text-muted/60 group-hover:text-primary/80 pb-1'>
                {miscellaneous?.email}
              </h4>
              <Button
                variant='link'
                className='text-primary-foreground group-hover:text-primary'
                asChild
              >
                <Link
                  href={`${
                    miscellaneous ? 'mailto:' + miscellaneous.email : '#'
                  }`}
                >
                  Envie-me um Email
                </Link>
              </Button>
            </div>
          </motion.article>
          <motion.article
            variants={slideInFromLeft(0.4)}
            className='rounded-2xl bg-primary group hover:bg-primary-foreground transition-colors duration-300 ease-in-out border border-primary py-4 px-4 md:px-10'
          >
            <div className='flex flex-col items-center text-primary-foreground group-hover:text-primary'>
              <Icons.messenger className='w-7 h-7 invert group-hover:invert-0 dark:invert-0 dark:group-hover:invert' />
              <h3 className='text-lg font-medium pt-4'>Messenger</h3>
              <h4 className='text-sm text-muted/60 group-hover:text-primary/80 pb-1'>
                {miscellaneous?.messengerName}
              </h4>
              <Button
                variant='link'
                className='text-primary-foreground group-hover:text-primary'
                asChild
              >
                <Link
                  href={`${miscellaneous ? miscellaneous.messengerUrl : '#'}`}
                  target='_blank'
                  rel='noopener noreferer'
                >
                  Diga um Oi
                </Link>
              </Button>
            </div>
          </motion.article>
          <motion.article
            variants={slideInFromLeft(0.5)}
            className='rounded-2xl bg-primary group hover:bg-primary-foreground transition-colors duration-300 ease-in-out border border-primary py-4 px-4 md:px-10'
          >
            <div className='flex flex-col items-center text-primary-foreground group-hover:text-primary'>
              <Icons.discord className='w-8 h-8 invert group-hover:invert-0 dark:invert-0 dark:group-hover:invert' />
              <h3 className='text-lg font-medium pt-4'>Discord</h3>
              <h4 className='text-sm text-muted/60 group-hover:text-primary/80 pb-1'>
                {miscellaneous?.discordUsername}
              </h4>
              <Button
                variant='link'
                className='text-primary-foreground group-hover:text-primary'
                asChild
              >
                <Link
                  href={`${miscellaneous ? miscellaneous.discordUrl : '#'}`}
                  target='_blank'
                  rel='noopener noreferer'
                >
                  Vamos conversar
                </Link>
              </Button>
            </div>
          </motion.article>
        </div>
        <motion.div variants={slideInFromRight(0.5)} className='lg:col-span-3'>
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
