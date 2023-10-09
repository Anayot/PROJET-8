import { useEffect, useState } from "react"

export function useFetchSkills(url, defaultValue = null) {
    const [skills, setSkills] = useState(defaultValue)
    const [error, setError ] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url)
                const result = await response.json()
                setSkills(result)
                }
            catch(err){
                setError(error)
            }
        }
        fetchData()
    }, [url, error])

    return({skills, error})
}