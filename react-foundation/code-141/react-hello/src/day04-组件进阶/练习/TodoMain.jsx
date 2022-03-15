import React from 'react'

export default function TodoMain({ list, delById, edit }) {
  return (
    <tbody>
      {list.map((item) => {
        return (
          <tr className="tr" key={item.id}>
            <td>{item.author}</td>
            <td>{item.time}</td>
            <td>{item.comment}</td>
            <td>{item.attitude}</td>
            <td>
              <button onClick={() => edit(item.id, 2)}>修改</button>
              <button onClick={() => delById(item.id)}>删除</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
