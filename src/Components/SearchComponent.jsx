import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";



const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const isFocused = inputValue !== '';

  return (
    <div className="container mx-9 ">
      {/* Search section div bar */}
      <div className="mb-4 relative w-44 md:w-56 lg:w-64 h-5 ">
        <label
          htmlFor="searchInput"
          className={`absolute left-4 flex font-semibold ${isFocused ? '-top-4 text-blue-500 text-sm' : 'top-1 text-gray-600 transition-all duration-1000 ease-in-out pointer-events-none'}`}
        >
          Search <FaSearch className='ml-20 sm:ml-20 md:ml-32 lg:ml-40 mt-1'/>
        </label>
        <input 
          type="text"
          id="searchInput"
          className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-black h-8 opacity-15 bg-black cursor-pointer"
          placeholder=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* Other content or components can be added here */}
    </div>
  );
};

export default SearchComponent;


// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

//  function SearchComponent() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }

// export default SearchComponent;