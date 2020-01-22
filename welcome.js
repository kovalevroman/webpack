export const welcome = (message) => {

  if ( NODE_ENV === 'development'){
    console.log('LANG', LANG);
    console.log('development');
  }

  console.log('message', message);
};
