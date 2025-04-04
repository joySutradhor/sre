import { useEffect, useState } from "react"
import handleCategories from "../helpers/handleCategories"

const useFilterCategory = (categories) => {
    const [category, setCategory] = useState(" Show All")
    const handleFilter = () => {
        for (let cat in categories) {
            if (categories[cat] === true) {
                setCategory(cat)
            }
        }
    }

    useEffect(() => {
        handleCategories(category, setCategory)
        handleFilter()
    }, [categories])
    console.log(category, "category")
    return { category }
}

export default useFilterCategory
