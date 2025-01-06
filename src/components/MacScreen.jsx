const MacScreen = ({ projectInfo }) => {
  const { imageUrl, link, projectName, projectDescription } = projectInfo;
  return (
    <div className="flex-shrink-0 w-auto max-w-md border-2 border-gray-300 rounded-lg shadow-lg relative bg-white overflow-hidden transform transition duration-300 hover:cursor-pointer dark:bg-dark-200">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-dark-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="text-gray-800 text-xs font-medium truncate dark:text-gray-200">{projectName}</div>
      </div>
      {/* Body Section */}
      <a href={link} target='_blank'>
        <div
          className="flex items-center justify-center bg-cover bg-center w-full h-auto relative overflow-hidden text-white-100 dark:bg-dark-300"
        >
          <img src={imageUrl} className="w-full h-full object-contain" alt="" loading="lazy" />
          <div className='w-full h-full bg-black/80 absolute flex flex-col justify-center gap-10 items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-100 text-center'>
            <h4 className='text-white capitalize text-lg md:text-xl lg:text-2xl font-medium dark:text-white'>{projectName}</h4>
            <p className='text-white text-xs md:text-sm dark:text-gray-300 text-balance'>{projectDescription}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MacScreen;
