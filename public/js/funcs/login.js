import { saveInToLocalStorege, showSwal } from "../utils/utils.js"

const login = () => {
    let identifier = document.querySelector("#identifier")
    let password = document.querySelector("#password")

    const getUser = {
        identifier : identifier.value,
        password : password.value

        
        
    }
    fetch(`http://localhost:4000/v1/auth/login`,{
          method: "POST",
          headers: {
              "Content-Type"  : "application/json"
          },
          body : JSON.stringify(getUser)
      }).then((res) => {
        console.log(res);
        if(res.status == 200){
            showSwal("کاربر گرامی خوش آمدید",
                "success",
                "ورود به صحفه اصلی",
                (result) => {
                    if(result) {
                        location.href = "../index.html"
                    }
                }
                
            )
        }
        return res.json();
        
    }
).then(result => {
    saveInToLocalStorege("user" , {token : result.accessToken})
    console.log(result);
    
})
      

  
    
}

export { login }