const Button = ({label, background, color}) => {
  return (
    <button style={{backgroundColor: background, color: color}}>{label}</button>
  )
}

export default Button