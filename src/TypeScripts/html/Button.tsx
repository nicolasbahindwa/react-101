
type ButtonProps = {
    variant: 'primary' | 'primary'
    size:'small' | 'large',
    disabled?: boolean,
    onClick?: () => void,
    className?: string,  
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({variant, children, ...rest}:ButtonProps) => {
  return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}