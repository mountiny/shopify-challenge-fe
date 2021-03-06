const Banner = ({ show = false, children, ...rest }) => {
  return (
    <div 
      className={`fixed top-0 left-1/2 -translate-x-2/4 transform px-4 py-4 banner text-center font-bold max-w-xl md:max-w-2xl lg:max-w-4xl bg-red text-primary rounded-lg ease-my-curve transition-all duration-300 cursor-pointer
      ${show ? 'translate-y-4 opacity-100' : '-translate-y-36 opacity-60'}`}
      {...rest}
      >
      {children}
    </div>
  )
}

export default Banner;