import { useState } from "react"

function Authenticate ( {token} ) {

  const [successMessage, setSuccessMessage] = useState (null)
  const [error, setError] = useState (null)

  async function handleClick() {
    // event.preventDefault()

    try{
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup/authenticate', {
        method: 'GET',
        headers: {
          "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`,
        }
      });
      const result = await response.json()
      setSuccessMessage(result.message)
      console.log(successMessage)
    }
    catch(err){
      setError(err.message)
      console.log(err.message)
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>

  )

}

export default Authenticate