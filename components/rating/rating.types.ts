export interface IRating {
  count: number
  handleClick: (arg: Event) => void
  handleMouseEnter: (arg: Event) => void
  handleMouseLeave: (arg: Event) => void
}