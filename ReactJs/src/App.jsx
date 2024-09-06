import React from 'react';
import axios from 'axios';

export async function App(props) {
  const value = await axios.get('https://dummyjson.com/products').then(res => res.data)
  return (
    <div className='App'>
      <table>
      <tbody>
      <tr>
      <td>Product Name</td>
      <td>Description</td>
      <td>Image</td>
      </tr>
      value.map((item,index) =>
        (<tr>
      <td>item?.title</td>
      <td>item?.description</td>
      <td>item?.images?.[0]</td>
      </tr>)
      )
      </tbody>
      </table>
    </div>
  );
}

// Log to console
console.log('Hello console')