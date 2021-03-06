import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const SlideshowContainer = styled.div`
  position: relative;
`

export const SlideshowImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 12s;
  width: 100%;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 120px;
`

export const FlexGrow = styled.div`
  text-align: right;
  flex-grow: 1;
  padding: 20px;
  max-width: 66%;
`



// export const globalStyles = (
//   <Global
//     styles={css`
//       html,
//       body {
//         padding: 3rem 1rem;
//         margin: 0;
//         background: papayawhip;
//         min-height: 100%;
//         font-family: Helvetica, Arial, sans-serif;
//         font-size: 24px;
//       }
//     `}
//   />
// )

// export const basicStyles = css`
//   background-color: white;
//   color: cornflowerblue;
//   border: 1px solid lightgreen;
//   border-right: none;
//   border-bottom: none;
//   box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
//   transition: all 0.1s linear;
//   margin: 3rem 0;
//   padding: 1rem 0.5rem;
// `

// export const hoverStyles = css`
//   &:hover {
//     color: white;
//     background-color: lightgray;
//     border-color: aqua;
//     box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
//   }
// `
// export const bounce = keyframes`
//   from {
//     transform: scale(1.01);
//   }
//   to {
//     transform: scale(0.99);
//   }
// `

// export const Basic = styled.div`
//   ${basicStyles};
// `

// export const Combined = styled.div`
//   ${basicStyles};
//   ${hoverStyles};
//   & code {
//     background-color: linen;
//   }
// `
// export const Animated = styled.div`
//   ${basicStyles};
//   ${hoverStyles};
//   & code {
//     background-color: linen;
//   }
//   animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
// `
