

// eslint-disable-next-line react/prop-types
const ProtectRoute = ({element}) => {

    if(localStorage.getItem("verifyToken")){
        return element
    }
    else{
        return (  
            <div className="text-white">Verify your email to access</div>
          )
    }
 
}

export default ProtectRoute