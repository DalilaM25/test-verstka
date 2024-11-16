import { useState } from 'react'
import DropdownItem from '../dropdownItem/DropdownItem'

const DropdownList = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div >
            {items.map((item, index) => (
                <div key={index}>
                    <DropdownItem
                        handleClick={() => toggleDropdown(index)}
                        openIndex={openIndex}
                        item={item}
                    />
                </div>
            ))}
        </div>
    )
}

export default DropdownList
