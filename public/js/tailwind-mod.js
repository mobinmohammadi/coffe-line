if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const toggleThemeBtn = document.querySelector("#toggle-theme");
  toggleThemeBtn.addEventListener("click" , () => {
      if (localStorage.theme === "dark"){
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
      } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme" , "dark");
      }
      console.log("ss");
      
  })

  let theme = document.querySelector("#theme")

  theme.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
    
  })

