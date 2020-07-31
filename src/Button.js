function Button( props ) {
    return(
        <button className = "pressMe"
                  onClick = {
                      () => props.onClick() }>
            Click Me!
        </button>)
}