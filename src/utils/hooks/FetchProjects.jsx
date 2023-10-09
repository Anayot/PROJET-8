import { useEffect, useState } from "react"

export function useFetchProjects(url, defaultValue = null) {
    const [data, setData] = useState(defaultValue)
    const [error, setError ] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                }
            catch(err){
                setError(error)
            }
        }
        fetchData()
    }, [url, error])

    return({data, error})
}