import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'


import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation()

  useEffect(() => {
    if (searchTerm.trim()) {
      if (location.pathname === 'video') {
        getResults(`${location.pathname}/q=${searchTerm.trim()} videos`)
      }
      else {
        getResults(`${location.pathname}/q=${searchTerm.trim()}`)
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className='sm:px-20 flex flex-wrap justify-between space-y-6'>
          {results?.results?.map((item, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={item.link} target='_blank' rel='noreferrer'>
                <p className='text-sm'>{item.link.length > 30 ? `${item.link.substring(0,30)}...` : item.link}</p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-20 flex flex-wrap justify-between items-center space-y-6">
          {results?.entries?.map(({ id, links, title, summary }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
              </a>
              <div className="flex flex-wrap justify-between gap-4" dangerouslySetInnerHTML={{__html: summary}} />
            </div>
          ))}
        </div>       
      );
    case '/video':
      return (
        <div className='flex flex-wrap'>
          {results?.results?.map((item, index) => (
            <div key={index} className='p-2'>
              <ReactPlayer url={item?.link} controls width='355px' height='200px' />
            </div>
          ))}
        </div>
      );
    case '/image':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map((item, index) => (
            <a key={index} href={item.link.href} target='_blank' rel='noreferrer' className='sm:p-3 p-5'>
              <img src={item?.image?.src} alt={item?.link?.title} loading='lazy' />
              <p className='sm:w-36 w-36 break-words text-sm mt-2'>{item?.link?.title}</p>
            </a>
          ))}
        </div>
      )
    default:
      return 'ERROR';
  }

}

export default Results