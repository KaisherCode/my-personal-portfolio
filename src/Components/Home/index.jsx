import white_papper from '../../assets/white_papper.pdf'
import { FaLinkedin, FaArrowCircleDown } from 'react-icons/fa'
// import home from '../../assets/image-home.png'

const Home = ({ name, title, linkedIn }) => {
  return (
    <section id="home" className=" lg:min-h-screen lg:flex lg:justify-start lg:space-y-80 lg:space-x-20 text-white">
      <img
        className="absolute w-full h-full inset-0 -z-10 object-cover object-right md:object-center"
        src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80&w=2047&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
      />

      <div className=" abolute m-6">
        <h1 className="lg:mb-4 font-bold text-3xl">Hello everyone!</h1>
        <h2 className="mb-4 " >My name is <span className=" font-semibold text-lg text-red-400">{name}</span>, {title}</h2>
        <div className="flex gap-2 ">
          <a href={white_papper} download className="p-2 border border-indigo-400 rounded-lg dark:border-yellow-50 flex gap-2 justify-evenly items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% " ><FaArrowCircleDown />Download CV</a>
          <a href={linkedIn} target='_blank' className="p-2 border border-indigo-400 rounded-lg dark:border-yellow-50 flex gap-2 justify-evenly items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">LinkedIn<FaLinkedin /></a>
        </div>
      </div>

    </section>
  )
}
export { Home }