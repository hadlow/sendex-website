import * as React from "react"

const DocsPage = () => {
  return (
    <>
      <title>Documentation - Sendex</title>

      <nav id="header" className="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
         <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div className="pl-4 flex items-center">
               <svg className="h-5 pr-3 fill-current text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/>
               </svg>
               <a className="text-gray-900 text-base no-underline hover:no-underline font-semibold text-xl" href="#">Sendex Docs</a>
            </div>

            <div className="block lg:hidden pr-4">
               <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <title>Menu</title>
                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
               </button>
            </div>

            <div className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20" id="nav-content">
               <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0"></div>

               <ul className="list-reset lg:flex justify-end items-center">
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Active</a>
                  </li>
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4" href="#">link</a>
                  </li>
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4" href="#">link</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>

      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
         <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
            <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
            <div className="block lg:hidden sticky inset-0">
               <button id="menu-toggle" className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
               </button>
            </div>
            
            <div className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style={{top: '5em'}} id="menu-content">
               <ul className="list-reset">
                  <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <a href="#" className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500">
                     <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">Home</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>

         <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
            <div className="font-sans">
               <span className="text-base text-purple-500 font-bold">&laquo;</span> <a href="#" className="text-base md:text-sm text-purple-500 font-bold no-underline hover:underline">Back Link</a>
               <h1 className="font-sans break-normal text-gray-900 pt-6 pb-2 text-xl">Help page title</h1>
               <hr className="border-b border-gray-400" />
            </div>

            {/* CONTENT HERE*/}
         </div>
      </div>

      <footer className="bg-white border-t border-gray-400 shadow">
         <div className="container mx-auto flex py-8">
            <div className="w-full mx-auto flex flex-wrap">
               <div className="flex w-full lg:w-1/2 ">
                  <div className="px-8">
                     <h3 className="font-bold text-gray-900">About</h3>
                     <p className="py-4 text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia. 
                     </p>
                  </div>
               </div>

               <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                  <div className="px-8">
                     
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </>
  )
}

export default DocsPage
