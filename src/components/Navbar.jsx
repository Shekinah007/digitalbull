
export const Navbar = () => {
  return (
    <div className="h-[70px] fixed top-0 left-0 right-0 bg-black flex flex-row justify-between items-center px-5 text-white">
      <div className="flex gap-5">
        <div>
          <h2>DIGITAL <span className="red">BULL</span></h2>
          <div className="underline"></div>
        </div>
        <div>
          <a href="#learning-goals">What you will learn</a>
          <a href="#">Training Results</a>
          <a href="#course-outline">Course Outline</a>
        </div>
      </div>
      <a href="mailto:digitalbull@gmail.com" className="contact">Contact Us</a>
    </div>
  )
}
