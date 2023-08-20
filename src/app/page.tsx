'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react';
import FileUpload from './components/FileUpload';
import { loginURI, getTokenFromUrl } from './util/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import "@uploadthing/react/styles.css";

export default function Home() {
  const spotifyAPi = new SpotifyWebApi();
  const [accessToken, setAccessToken] = useState('');

  const Login = <a
    href={loginURI}
    className="group rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={`mb-3 text-xl font-semibold`}>
      Login to Spotify{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
      Authenticate your Spotify account to use Sighted
    </p>
  </a>
    ;

  useEffect(() => {
    const token = getTokenFromUrl().access_token;
    if (token) {
      spotifyAPi.setAccessToken(token);
      setAccessToken(token);
      spotifyAPi.getMe().then(user => {
        console.log(user);
      })
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        {/* </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

        </div>
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}

      {/* </div> */}

      <div className="w-full h-[65vh] mb-3 flex justify-center before:absolute">
        <div className="w-1/5 h-full border rounded-2xl border-solid border-gray-50">

        </div>
      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">

        {accessToken ? '' : Login}

        <a
          href="#"
          className="group rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            View Your Edits{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            View the edits you've made here.
          </p>
        </a>
        <a
          href="#"
          className="group rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            idk what to put here{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Placeholder for now
          </p>
        </a>
        <div className="group rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <FileUpload />
        </div>

      </div>
    </main>
  )
}
