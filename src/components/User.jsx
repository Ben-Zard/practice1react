import React from 'react'
import styled from 'styled-components'

const Box = styled.div`

  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;


& ul {
  list-style: none;
  padding: 1rem;
}

& li {
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
}
  `
const User = ({Users}) => {
  return (
    <Box>
{Users.map((d) => (
    <ul key = {d.id}>
<li>{d.name}</li>
<li>{d.age}</li>
</ul>
))}
</Box>
  )
}

export default User