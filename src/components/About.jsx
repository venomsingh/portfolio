import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];

const About = () => {
  return (
    <section id='about'
      className='section lg:mx-32 p-20 min-w-fit'>
      <div className="container">
        <div className='bg-zinc-800/50 flex flex-col justify-center   p-10 rounded-2xl md:p-10'>
          <p className='text-zinc-300  mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Welcome! I&apos;m Shubham singh, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
          </p>
          <div className=" flex flex-wrap justify-between  items-center gap-4 md:gap-7"> {
            aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className=" felx items-center md:mb-2">
                  <span className="text-2xl  md:text-4xl font-semibold">{number}</span>
                  <span className=" text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className=" text-sm text-zinc-400 ">{label}</p>
              </div>
            ))
          }
            <img src="/images/logo.png" alt="Logo"
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
