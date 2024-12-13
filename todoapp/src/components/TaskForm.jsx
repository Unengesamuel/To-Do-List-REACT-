import React, {useState} from 'react'

function TaskForm() {
  const [events,setEvents] = useState([]);
  const [eventName, setEventName] = useState(''); // Input for the event name
  const [eventDate, setEventDate] = useState('')

  // Function to add a new event
  const handleAddEvent = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (eventName.trim() === "" || eventDate.trim() === "") return; // Ensure inputs are not empty


      // Add the new event to the events array
      const newEvent = {
        id: events.length + 1, // Assign a unique ID
        name: eventName, // Set event name
        date: eventDate, // Set event date
      };

      setEvents([...events, newEvent]); // Add new event to the state
      setEventName(""); // Clear the event name input
      setEventDate(""); // Clear the date input
  };

    // Function to handle event deletion
    const handleDeleteEvent = (id) => {
      const updatedEvents = events.filter((event) => event.id !== id);
      setEvents(updatedEvents); // Update the events state
    };

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
              Date
            </td>
            <td className='p-6 border-2 border-black w-52 text-2xl font-semibold text-center'>
              Edit Event
            </td>
            <td className='p-6 border-2 border-black w-52 text-2xl font-semibold text-center'>
              Delete Event
            </td>
          </tr>
        </thead>
        <tbody>
        {events.map((event) => (
          <tr className=''> 
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              {event.id}
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              {event.name}
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              {event.date}
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
              Edit Event
            </td>
            <td className='p-6 border-2 border-black w-52 text-xl text-center'>
            <button onClick={() => handleDeleteEvent(event.id)} className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
            </td>

          </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleAddEvent} 
        className='flex flex-col gap-2 justify-center items-center mt-20  pl-10 fixed bottom-0 py-6   bg-blue-100 w-full border-black border-t-2'>
        <input type="text"
          placeholder='Event'
          value={eventName} 
          onChange={(e) => setEventName(e.target.value)} // Update event name state
          className='border-black border w-96 py-3 px-1 rounded text'
        />
        <input
          type="date"
          className="border-black border w-96 py-3 px-1 rounded"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)} // Update date state
        />
        {/* <input type="text" 
          placeholder='Edit Event' 
          className='border-black border w-96 py-3 px-1 rounded '/> */}
        <input type="submit" value="Add Event" className='border-black border w-48 py-3 px-1 rounded bg-blue-800 text-white font-bold'/>
      </form>
    </div>
  )
}

export default TaskForm
