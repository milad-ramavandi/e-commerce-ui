import { IButtonProps } from '@/types'

const Button = ({children, ...props}: IButtonProps) => {
  return (
    <button {...props}>
       {children}
    </button>
  )
}

export default Button