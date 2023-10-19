const projectlist = [
  {
    title: "Shop Admin Web Apps 🎉",
    description: "Shop Admin web application ",
    url: "https://github.com/KaisherCode/react-shop-admin",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Web Development Async landing page",
    description:
      "Async landing page ",
    url: "https://async-landing-page.netlify.app/",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
  },
  {
    title: "Batata bitcoin Application",
    description: "Batatabitcoin store is an online store built using Html y Css.",
    url: "https://kaishercode.github.io/cursoMobileFirst/",
    image: "https://images.unsplash.com/photo-1616402631152-778ab353d963?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Landing Page de Platzi Travel",
    description:
      "Maquetación de Platzi Travel utilizando TailwindCss",
    url: "https://kaishercode.github.io/tailwind-3/public/",
    image: "https://images.unsplash.com/photo-1617235116034-6d36352e64ef?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Yard Sale App",
    description: "Shoppi store is an online store built using React.js, Vite.js and Tailwindcss.",
    url: "https://shoppistore.netlify.app/",
    image: "https://shoppistore.netlify.app/assets/logo_yard_sale-95f546ea.svg",
  },
  {
    title: "Hynkor Sotore",
    description: "Hynkor Store is a web application built with WordPress CMS and Woocommerce.",
    url: "https://ecommerce.hynkor.com",
    image: "https://ecommerce.hynkor.com/wp-content/uploads/2023/05/logo-white-hynkor-v2-300x97.png",
  },
]
const Project = () => {
  return (
    <section id="project" className="flex flex-col justify-evenly items-center dark:text-white mb-16 ">
      <h2 className="text-center font-bold text-2xl pt-16 mb-4">Projects Portfolio</h2>
      <div className="grid lg:grid-cols-3 gap-10 p-6 max-w-screen-lg  ">
        {projectlist.map((project) => (
          <div className=" rounded-lg border shadow-xl hover:border-indigo-500" key={project.title}>
            <div className=" text-center p-4 flex flex-col">
              <img className=" rounded-t-lg mb-4 " src={project.image} alt={project.title} />
              <a href={project.url} target="_blank"><h3 className=" font-semibold text-xl ">{project.title}</h3></a>
              <span className=" font-light text-xl">{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export { Project }