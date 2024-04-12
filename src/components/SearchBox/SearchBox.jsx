import { useId } from "react"
import css from "../SearchBox/SearchBox.module.css"
export default function SearchBox({onFilter, value}) {
const filterId = useId();
    return(
        <div className={css.inputDiv}>
            <label htmlFor={filterId}>Find contacts by name</label>
            <input
             type="text"
             onChange={(e) => {onFilter(e.target.value)}}
             value={value}
             id={filterId}>
              </input>
        </div>
    )
}