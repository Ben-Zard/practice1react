import React from 'react'
const User = ({Users}) => {
  return (
    <div>
{Users.map((d) => (
    <div key = {d.id}>
<div>{d.name}</div>
<div>{d.age}</div>
</div>
))}
</div>
  )
}

export default User