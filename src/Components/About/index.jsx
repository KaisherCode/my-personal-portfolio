// import home from '../../assets/image-home.png'
const description = "I am a professional in Computer Science and Informatics. I like to build attractive applications and websites both backend and frontend, using Javascript, TailwindCss, React.js/Next.js and Node. I am also familiar with graphic design for creating logos and icons using Adobe Illustrator."
const detailOrQuote = "Learning new things always excites me, and I am constantly looking for new challenges to expand my knowledge and skills."
const About = () => {
  return (
    <section id="about" className=" dark:text-white lg:pl-32 lg:pr-32 flex justify-center items-center m-6 ">
      <div className='lg:border border-indigo-400 lg:shadow-lg lg:flex justify-evenly items-center p-4 lg:rounded-md '>
        <img 
          className='lg:w-96 lg:h-96 border-2 border-dotted border-indigo-400 shadow-xl rounded-lg' 
          src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imgen sobre mí" />

        <div className="  lg:p-16  ">
          <h2 className=" font-bold text-2xl mb-6 mt-6 ">About Myself</h2>
          <p className=" text-xl font-light">{description}</p>
          <p className="  font-light text-xl">
            {detailOrQuote}
          </p>
        </div>
      </div>

    </section>
  )
}
export { About }