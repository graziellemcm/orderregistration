
import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {

  const [data, setData] = useState([initialData])
  const [loading, setLoading] = useState(false)

  const getData = (url) => {
    
    setLoading(true)

    axios.get(url)
      .then((res) => {
        setLoading(false)
        setData(res.data.Products)
      })
      .catch((err) => {
        console.log(err.response.data)
        setLoading(false)
      })
  }

      useEffect(() => {
        getData(url)
      }, [url])

  return [data, loading, getData]

}

export default useRequestData