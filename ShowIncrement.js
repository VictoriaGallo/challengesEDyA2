export const ShowIncrement =({incrementFather}) => {
    return(
        <button
        onClick={() => incrementFather()}
        >
            increment
        </button>
    )
}