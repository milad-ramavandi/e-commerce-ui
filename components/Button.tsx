import { IButtonProps } from '@/types'

const Button = ({className, children, ...props}: IButtonProps) => {
  return (
    <button className={className} {...props}>
       {children}
    </button>
  )
}

export default Button