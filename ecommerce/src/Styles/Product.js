import styled from "styled-components";

 export const ProductStyles = styled.section`
.grid-filter-column {
  grid-template-columns: 0.2fr 1fr;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-filter-column {
    grid-template-columns: 1fr;
  }
}
`