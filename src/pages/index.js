import React, { useState } from "react"

import Button from '../components/Button'
import Footer from '../components/Footer'
import Card from '../components/Card'

import newSteps from '../images/new-steps.svg'
import runTerminal from '../images/run-terminal.svg'
import peekTerminal from '../images/peek-terminal.svg'

const IndexPage = () => {
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const copyInstall = () => {
    const command = 'npm i -g sendex'

    navigator.clipboard.writeText(command)

    setShowCopySuccess(true)
  }

  return (
    <>
      <title>Sendex - A lightweight API testing tool</title>

      <main className="container mx-auto px-3 md:px-6">
        <div className="flex items-center py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="91.475" height="20.631" viewBox="0 0 91.475 20.631">
            <path id="Path_1" data-name="Path 1" d="M4.854,17.242a2.6,2.6,0,0,0,.533,1.477,3.6,3.6,0,0,0,2.68.779,4.085,4.085,0,0,0,1.825-.342,1.147,1.147,0,0,0,.13-2.023,22.247,22.247,0,0,0-4.061-1.176,8.457,8.457,0,0,1-3.568-1.572,3.409,3.409,0,0,1-1.039-2.68,4.648,4.648,0,0,1,1.62-3.548,6.507,6.507,0,0,1,4.56-1.483,8.365,8.365,0,0,1,4.546,1.114A4.773,4.773,0,0,1,14.1,11.637H10.2a2.3,2.3,0,0,0-.424-1.189,2.667,2.667,0,0,0-2.187-.793,3.143,3.143,0,0,0-1.812.4,1.141,1.141,0,0,0-.54.93,1.017,1.017,0,0,0,.574.971,24.858,24.858,0,0,0,4.061,1.08,7.458,7.458,0,0,1,3.486,1.654,3.756,3.756,0,0,1,1.148,2.8A4.529,4.529,0,0,1,12.858,21.1a7.74,7.74,0,0,1-5.093,1.4q-3.514,0-5.188-1.483A4.826,4.826,0,0,1,.9,17.242ZM22.542,9.914a2.646,2.646,0,0,0-2.1.848,4.231,4.231,0,0,0-.937,2.3h6.057a3.392,3.392,0,0,0-.937-2.345A2.908,2.908,0,0,0,22.542,9.914Zm0-3.213a7.81,7.81,0,0,1,3.35.7,5.868,5.868,0,0,1,2.461,2.2,7.51,7.51,0,0,1,1.135,3.076,19.867,19.867,0,0,1,.123,2.953h-10.2a3.7,3.7,0,0,0,1.408,3.145,3.317,3.317,0,0,0,1.941.561,2.794,2.794,0,0,0,1.955-.684,3.247,3.247,0,0,0,.725-1.025h3.979a4.943,4.943,0,0,1-1.381,2.693,6.765,6.765,0,0,1-5.359,2.174,7.557,7.557,0,0,1-5.018-1.832q-2.174-1.832-2.174-5.961a8.285,8.285,0,0,1,1.962-5.934A6.708,6.708,0,0,1,22.542,6.7Zm17.223.041a5.752,5.752,0,0,1,3.78,1.21,4.92,4.92,0,0,1,1.47,4.013V22H41.023V12.936a4.136,4.136,0,0,0-.314-1.8,2.212,2.212,0,0,0-2.187-1.148A2.713,2.713,0,0,0,35.8,11.664a5.776,5.776,0,0,0-.383,2.27V22H31.534V7.125h3.76V9.3a6.615,6.615,0,0,1,1.422-1.654A4.941,4.941,0,0,1,39.765,6.742Zm13.614,0a4.806,4.806,0,0,1,2.406.595,4.733,4.733,0,0,1,1.709,1.647V1.875h3.951V22H57.658V19.936a5.5,5.5,0,0,1-1.9,1.928,5.335,5.335,0,0,1-2.652.6,5.538,5.538,0,0,1-4.4-2.112,8.111,8.111,0,0,1-1.784-5.421,9.33,9.33,0,0,1,1.757-6A5.716,5.716,0,0,1,53.379,6.742Zm.848,12.441a2.877,2.877,0,0,0,2.516-1.23,5.436,5.436,0,0,0,.861-3.186,4.886,4.886,0,0,0-1.381-3.91,2.972,2.972,0,0,0-1.969-.711,2.737,2.737,0,0,0-2.509,1.292,5.986,5.986,0,0,0-.8,3.206,5.932,5.932,0,0,0,.813,3.3A2.752,2.752,0,0,0,54.226,19.184Zm15.911-9.27a2.646,2.646,0,0,0-2.1.848,4.231,4.231,0,0,0-.937,2.3h6.057a3.392,3.392,0,0,0-.937-2.345A2.908,2.908,0,0,0,70.137,9.914Zm0-3.213a7.81,7.81,0,0,1,3.35.7,5.868,5.868,0,0,1,2.461,2.2,7.51,7.51,0,0,1,1.135,3.076,19.867,19.867,0,0,1,.123,2.953h-10.2a3.7,3.7,0,0,0,1.408,3.145,3.317,3.317,0,0,0,1.941.561,2.794,2.794,0,0,0,1.955-.684,3.247,3.247,0,0,0,.725-1.025h3.979a4.943,4.943,0,0,1-1.381,2.693,6.765,6.765,0,0,1-5.359,2.174,7.557,7.557,0,0,1-5.018-1.832q-2.174-1.832-2.174-5.961a8.285,8.285,0,0,1,1.962-5.934A6.708,6.708,0,0,1,70.137,6.7Zm7.5,15.3,5.086-7.547L77.858,7.125H82.63l2.488,4.32,2.434-4.32h4.635l-4.895,7.26L92.378,22H87.524l-2.57-4.471L82.37,22Z" transform="translate(-0.902 -1.875)" fill="#fff"/>
          </svg>

          <div className="flex items-center ml-auto font-semibold">
            <a href="https://docs.sendexapi.com">Documentation</a>

            <div className="ml-6">
              <a href="https://github.com/hadlow/sendex">
                <svg xmlns="http://www.w3.org/2000/svg" width="38.373" height="37.426" viewBox="0 0 38.373 37.426">
                  <path id="Octicons-mark-github" d="M19.186,0a19.187,19.187,0,0,0-6.068,37.39c.959.168,1.319-.408,1.319-.911,0-.456-.024-1.967-.024-3.573-4.821.887-6.068-1.175-6.451-2.254A6.977,6.977,0,0,0,6,27.94c-.672-.36-1.631-1.247-.024-1.271a3.84,3.84,0,0,1,2.95,1.967,4.1,4.1,0,0,0,5.588,1.583,4.036,4.036,0,0,1,1.223-2.566C11.464,27.173,7,25.518,7,18.179A7.467,7.467,0,0,1,8.97,13.023a6.894,6.894,0,0,1,.192-5.084s1.607-.5,5.276,1.967a18.089,18.089,0,0,1,9.593,0c3.669-2.494,5.276-1.967,5.276-1.967a6.894,6.894,0,0,1,.192,5.084,7.424,7.424,0,0,1,1.967,5.156c0,7.363-4.485,8.994-8.754,9.473a4.544,4.544,0,0,1,1.3,3.55c0,2.566-.024,4.629-.024,5.276,0,.5.36,1.1,1.319.911A19.2,19.2,0,0,0,19.186,0Z" fill="#fff" fillRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-center py-48">
          <div className="max-w-screen-sm">
            <h1 className="text-4xl font-extrabold mb-3">An easier way to develop APIs</h1>

            <h2 className="font-semibold leading-7">Sendex is an API development tool that lives in your project source &amp; stays in sync with Git. Run configuration files from your terminal.</h2>

            <div className="flex justify-center mt-12">
              <div className="flex bg-blue-primary text-white rounded px-6 py-3 font-light font-mono mr-4">$ npm i -g sendex <svg onClick={copyInstall} className="cursor-pointer ml-4" width="16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg></div>

              <Button as="a" href="https://docs.sendexapi.com/getting-started/installing-sendex" theme="orange">Get started</Button>
            </div>

            {showCopySuccess && <div className="mt-4">Copied to clipboard!</div>}
          </div>
        </div>

        <div className="flex flex-col py-20 text-center">
          <div className="w-full md:w-1/2 mb-8 mx-auto">
            <h3 className="font-semibold text-2xl mb-4">Configure requests in YAML</h3>

            <p className="leading-7">All requests are configured using a YAML config file. Set all the parameters of the request including headers and body in this file.</p>
          </div>

          <div className="mx-auto">
            <img src={newSteps} alt="New request terminal and YAML" />
          </div>
        </div>

        <div className="grid md:grid-cols-12 py-28">
          <div className="col-span-6 md:pr-36">
            <h3 className="font-semibold text-2xl mb-6 mt-6">Send requests in your terminal</h3>

            <p className="mb-6 leading-7">Sending requests is as easy as 1 command in your terminal. Just specify the file and view the response below. Responses are also saved in the sendex folder.</p>

            <p className="leading-7">Requests can either be ran and the response saved as a txt file, or the response can be outputted to the console.</p>
          </div>

          <div className="col-span-6">
            <img src={runTerminal} alt="Run request terminal" className="mb-10" />

            <img src={peekTerminal} alt="Peek request terminal" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <Card
            theme="bg-yellow text-blue-dark"
            icon={
              <div className="flex place-items-center justify-center rounded-full bg-blue-dark w-16 h-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="45.512" height="34.897" viewBox="0 0 45.512 34.897">
                  <g id="stack-of-square-papers" transform="translate(0 -35.441)">
                    <g id="Group_2" data-name="Group 2" transform="translate(0 35.441)">
                      <path id="Path_2" data-name="Path 2" d="M.737,45.963l21.543,9.22a1.19,1.19,0,0,0,.477.1,1.221,1.221,0,0,0,.477-.1l21.542-9.22a1.213,1.213,0,0,0-.046-2.249L23.187,35.521a1.207,1.207,0,0,0-.862,0L.783,43.714a1.213,1.213,0,0,0-.046,2.249Zm22.019-8.011,18.3,6.962-18.3,7.835-18.3-7.835Z" transform="translate(0 -35.441)" fill="#fff"/>
                      <path id="Path_3" data-name="Path 3" d="M.738,127.519l22.019,9.425,22.018-9.425a1.213,1.213,0,0,0-.954-2.231l-21.065,9.017L1.691,125.289a1.213,1.213,0,1,0-.954,2.231Z" transform="translate(-0.001 -111.75)" fill="#fff"/>
                      <path id="Path_4" data-name="Path 4" d="M.738,159.918l22.019,9.425,22.018-9.425a1.213,1.213,0,0,0-.954-2.23L22.757,166.7,1.691,157.688a1.213,1.213,0,1,0-.954,2.23Z" transform="translate(-0.001 -139.297)" fill="#fff"/>
                      <path id="Path_5" data-name="Path 5" d="M.738,192.321l22.019,9.425,22.018-9.425a1.213,1.213,0,0,0-.954-2.23l-21.065,9.017L1.691,190.091a1.213,1.213,0,1,0-.954,2.23Z" transform="translate(-0.001 -166.849)" fill="#fff"/>
                    </g>
                  </g>
                </svg>
              </div>
            }
            title="See the docs"
            description="View the Sendex docs to find out all that you need to get the most out of Sendex."
            cta="View documentation ???"
            link="https://docs.sendexapi.com"
          />

          <Card
            theme="bg-blue-primary text-white"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" width="72.203" height="70.421" viewBox="0 0 72.203 70.421">
                <path id="Octicons-mark-github" d="M36.1,0A36.1,36.1,0,0,0,24.684,70.353c1.805.316,2.482-.767,2.482-1.715,0-.857-.045-3.7-.045-6.724-9.07,1.67-11.417-2.211-12.139-4.242-.406-1.038-2.166-4.242-3.7-5.1-1.264-.677-3.069-2.347-.045-2.392,2.843-.045,4.874,2.617,5.551,3.7,3.249,5.46,8.439,3.926,10.515,2.978a7.594,7.594,0,0,1,2.3-4.829c-8.033-.9-16.426-4.016-16.426-17.825a14.05,14.05,0,0,1,3.7-9.7,12.973,12.973,0,0,1,.361-9.567s3.023-.948,9.928,3.7a34.036,34.036,0,0,1,18.051,0c6.9-4.693,9.928-3.7,9.928-3.7a12.973,12.973,0,0,1,.361,9.567,13.968,13.968,0,0,1,3.7,9.7c0,13.854-8.439,16.923-16.471,17.825,1.309,1.128,2.437,3.294,2.437,6.679,0,4.829-.045,8.709-.045,9.928,0,.948.677,2.076,2.482,1.715A36.12,36.12,0,0,0,36.1,0Z" fill="#fff" fillRule="evenodd"/>
              </svg>
            }
            title="Sendex is on GitHub"
            description="Sendex is open-source. Star and watch Sendex on GitHub, and even contribute to making Sendex even better."
            cta="View on GitHub ???"
            link="https://github.com/hadlow/sendex"
          />
        </div>

        <Footer />
      </main>
    </>
  )
}

export default IndexPage
