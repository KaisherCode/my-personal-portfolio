import white_papper from '../../assets/white_papper.pdf'
import { FaLinkedin,FaArrowCircleDown } from 'react-icons/fa'
import home from '../../assets/image-home.png'

const Home = ({ name, title,linkedIn }) => {
  return (
    <section id="home" className=" min-h-screen flex justify-evenly items-center">
      <div className=" abolute ">
        <h1 className="mb-4 font-bold text-3xl">Hello everyone!</h1>
        <h2 className="mb-4">My name is <span className=" font-semibold text-lg text-red-400">{name}</span>, {title}</h2>
        <div className="flex gap-2">
          <a href={white_papper} download className="p-2 border-2 border-indigo-500 rounded-lg hover:bg-red-400 flex gap-2 justify-evenly items-center " ><FaArrowCircleDown/>Download CV</a>
          <a href={linkedIn} target='_blank' className="p-2 border-2 border-indigo-500 rounded-lg hover:bg-red-400 flex gap-2 justify-evenly items-center ">LinkedIn<FaLinkedin /></a>
        </div>
      </div>
      <img className="w-96 h-96 rounded-full" src={home} alt="" />
    </section>
  )
}
export { Home }