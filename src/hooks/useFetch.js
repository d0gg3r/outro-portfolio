import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await makeRequest.get(url)
        setData(response.data.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])

  return {data, loading}
}

export default useFetch