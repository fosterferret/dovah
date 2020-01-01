function getWindowHeight() {
    return (
      (document &&
        document.documentElement &&
        document.documentElement.clientWidth) ||
      window.innerWidth
    );
  }
  
  export default getWindowHeight;