import { Item } from "./itemNavegationStyles"

export const ItemNavegation = ({ children, active, to, onClick }) => {
  return (
    <Item onClick={onClick} href={to} active={active}>{children}</Item>
  )
}
