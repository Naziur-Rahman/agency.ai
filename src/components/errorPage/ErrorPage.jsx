import React from 'react'

const ErrorPage = () => {
    
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1 className='text-3xl font-bold py-6 text-center'>Oops!</h1>
        <div className=' text-2xl font-medium text-center py-4'>
        <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  )
}

export default ErrorPage