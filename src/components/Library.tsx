import React from 'react';
import { useSelector } from 'react-redux';

const Library = () => {
  const lists = useSelector((state) => state.lists);
  console.log(lists);

  // const listTable = lists.map((list) => (
  //   <tr>
  //     <td>{list.title}</td>
  //     <td>{list.title}</td>
  //     <td>{list.rating}</td>
  //     <td>
  //       <button className='delete'>x</button>
  //     </td>
  //   </tr>
  // ));
  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        <tr>
          <td>Dune</td>
          <td>F. Herbert</td>
          <td>10</td>
          <td>
            <button className='delete'>x</button>
          </td>
        </tr>
        {/* {listTable} */}
      </table>
    </div>
  );
};

export default Library;
