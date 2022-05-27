import { Item } from "./itemNavegationStyles"

export const ItemNavegation = ({ children, active, to }) => {
  return (
    <Item href={to}>{children}</Item>
  )
}
