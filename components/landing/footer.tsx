import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import type getData from '@/actions/get-data';
import { Button } from '@/components/ui/button';

export default function Footer({
  miscellaneous
}: Partial<Awaited<ReturnType<typeof getData>>>) {
  return (
    <footer id='footer' className='mt-32 bg-primary'>
      <div className='container px-4 md:px-8 mx-auto w-full flex flex-col py-12'>
        <div className='flex justify-center'>
          <Button
            variant='link'
            className='text-primary-foreground text-4xl font-medium uppercase'
            asChild
          >
            <Link href='#home'>Salimi</Link>
          </Button>
        </div>
        <ul className='w-full max-w-3xl mx-auto flex flex-col items-center md:flex-row justify-between mt-8'>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#home'>Home</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#about'>About</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#experience'>Experience</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#expertise'>Expertise</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#qualification'>Qualification</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#portfolio'>Portfolio</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#tool'>Tool</Link>
            </Button>
          </li>
          <li>
            <Button variant='ghost' className='text-primary-foreground' asChild>
              <Link href='#contact'>Contact</Link>
            </Button>
          </li>
        </ul>
        <div className='flex justify-center gap-4 mt-8'>
          <Button variant='secondary' size='icon' asChild>
            <Link
              href={`${miscellaneous ? miscellaneous.facebookUrl : '#'}`}
              aria-label='Facebook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Facebook className='w-5 h-5' />
            </Link>
          </Button>
          <Button variant='secondary' size='icon' asChild>
            <Link
              href={`${miscellaneous ? miscellaneous.instagramUrl : '#'}`}
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram className='w-5 h-5' />
            </Link>
          </Button>
          <Button variant='secondary' size='icon' asChild>
            <Link
              href={`${miscellaneous ? miscellaneous.twitterUrl : '#'}`}
              aria-label='Twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter className='w-5 h-5' />
            </Link>
          </Button>
          <Button variant='secondary' size='icon' asChild>
            <Link
              href={`${miscellaneous ? miscellaneous.linkedinUrl : '#'}`}
              aria-label='LinkedIn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='w-5 h-5' />
            </Link>
          </Button>
        </div>
        <div className='flex justify-center my-16'>
          <small className='text-muted'>
            Created by
            <Button variant='link' className='text-muted text-xs px-1' asChild>
              <Link
                href='https://www.linkedin.com/in/mohamad-salimi'
                target='_blank'
                rel='noopener noreferrer'
              >
                Salimi
              </Link>
            </Button>
            &copy; {new Date().getFullYear()}.
          </small>
        </div>
      </div>
    </footer>
  );
}
