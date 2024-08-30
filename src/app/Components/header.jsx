'use client'
import Style from '@/app/Components/header.css'
import { Main } from 'next/document';
import Link from 'next/link';
import { useState } from 'react';
function Header() {
  const [click, setClick] = useState(false)
  const [cut, setCut] = useState(false)

  return (
    <>
      <div className='HeaderWrapper'>
        <div className='insideMenu'>

          <ul className={click ? 'open' : ' '}>
            <Link href='' className='cut mt-4   ' onClick={() => { setClick(!click) }}>     <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" fill="#fafafa" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg></Link>

            <li><Link href={' /'} >Home</Link></li>
            <li><Link href={'/About'} >About</Link></li>
            <li><Link href={'/Project '} >Project</Link></li>
            <li><Link href={'/Contact'} >Contact</Link></li>

          </ul>

          <Link className='op w-fit border-l-orange-600' href=' ' onClick={() => { setClick(!click) }}  >  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" fill="#FF9100" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg></Link>


        </div>



      </div>
    </>
  );
}

export default Header;