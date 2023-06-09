'use client'

import Link from 'next/link'
import { Fragment } from 'react'

const date = new Date()
const currentYear = date.getFullYear()

export default function Home() {
  return (
    <Fragment>
      <div className='navbar bg-base-100 sticky top-0 z-50'>
        <div className='navbar-start'>
          <Link href='/#home' className='btn btn-ghost normal-case text-xl'>
            Zakmi Technologies
          </Link>
        </div>

        <div className='navbar-end'>
          <Link href='/#contact' className='btn'>
            Contact
          </Link>
        </div>
      </div>

      <div id='home' className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-2xl'>
            <h1 className='text-4xl font-bold'>
              Let&apos;s Build Something Great Together
            </h1>
            <p className='py-6'>
              We build innovative web and mobile apps that help you achieve your
              goals. Our experienced team brings your vision to life with
              cutting-edge tech and creative solutions. Let&apos;s work together
              to build something great.
            </p>
            <Link href='/#contact' className='btn btn-primary'>
              Get In Touch!
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center bg-base-200 mx-w-2xl px-3'>
        {/* {[...Array(3)].map((_, i) => ( */}
        <div className='card h-60 w-full sm:w-[70%] md:w-[70%] lg:w-[45%] bg-base-100 shadow-sm m-3'>
          <div className='card-body'>
            <h2 className='card-title'>Out Mission</h2>
            <p>
              Our mission is to build innovative web and mobile applications
              that help our clients achieve their goals. We strive to deliver
              cutting-edge technology and creative solutions that exceed our
              clients&apos; expectations.
            </p>
          </div>
        </div>
        <div className='card h-60 w-full sm:w-[70%] md:w-[70%] lg:w-[45%] bg-base-100 shadow-sm m-3'>
          <div className='card-body'>
            <h2 className='card-title'>Out Vision</h2>
            <p>
              Our vision is to be the go-to partner for businesses and
              organizations looking to leverage technology to achieve their
              goals. We aim to be recognized for our innovative solutions,
              exceptional customer service, and commitment to delivering value
              to our clients.
            </p>
          </div>
        </div>
        {/* ))} */}
      </div>

      <div id='contact' className='mx-auto text-center bg-base-200 py-44 px-3'>
        <h1 className='text-4xl font-bold'>Contact us</h1>
        <p className='mt-3'>
          Email us at <a href='mailto:inf@zakmi.tech'>inf@zakmi.tech</a> or call
          us at <a href='tel:+254799112976'>+254 799 112 976</a>
        </p>
      </div>

      <footer className='bg-base-200 text-center py-10'>
        <hr />
        <div className='p-4'>
          <div>Copyright {currentYear} &copy; All Rights Reserved</div>
        </div>
      </footer>
    </Fragment>
  )
}
