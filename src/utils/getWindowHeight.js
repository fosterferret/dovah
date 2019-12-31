function getWindowHeight() {
    return (
      (document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
      window.innerHeight
    );
  }
  
  export default getWindowHeight;