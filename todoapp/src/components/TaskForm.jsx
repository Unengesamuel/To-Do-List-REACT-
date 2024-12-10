import React, {useState} from 'react'

function TaskForm() {
  return (
    <div>
      <table className='flex flex-col justify-center items-center'>
        <thead className='mt-10'>
          <tr className=''> 
            <td className='p-6 border-2 border-black w-52 text-2xl font-semibold text-center'>
              S/N 
            </td>
            <td className='p-6 border-2 border-black w-52 text-2xl font-semibold text-center'>
              Event
            </td>
            <td className='p-6 border-2 border-black w-52 text-2xl font-semibold text-center'>
              Edit Event
            </td>
            <td className='p-6 border-2 border-black w-52 text-2xl font-semibold text-center'>
              Delete Event
            </td>
          </tr>
        </thead>
        <thead>
          <tr className=''> 
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              S/N 
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              Event
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              Edit Event
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              Delete Event
            </td>
          </tr>
        </thead>
      </table>

      <form action="" className='flex flex-col gap-2 justify-center items-center mt-20  pl-10'>
        <input type="text" placeholder='Event' className='border-black border w-96 py-3 px-1 rounded text'/>
        <input type="text" placeholder='Edit Event' className='border-black border w-96 py-3 px-1 rounded '/>
        <input type="text" placeholder='Delete Event' className='border-black border w-96 py-3 px-1 rounded '/>
        <input type="submit" value="Add Event" className='border-black border w-48 py-3 px-1 rounded bg-blue-800 text-white font-bold'/>
      </form>
    </div>
  )
}

export default TaskForm
