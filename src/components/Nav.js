import React from 'react'

function Nav() {
  return (
    <>
    <div className='nav'>
    <div className='nav-left'>Icon</div>
    <div className='nav-middle'>Middle</div>
    <div className='nav-right'>
        <div className='nav-about'><span className='number'>01.</span> About</div>
        <div className='nav-work'><span className='number'>02.</span> Work</div>
        <div className='nav-contact'><span className='number'>03.</span> Contact</div>
        <div className='nav-resume'>Resume</div>
    </div>
    </div>
    </>
  )
}

export default Nav