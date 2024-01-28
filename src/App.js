import React, { useState } from 'react';
import axios from 'axios';
import DisplayDate from './DisplayDate';
import DateSelector from './DateSelector';
import logoImage from './akto.svg'

const App = () => {
  const [data, setData] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [textInput, setTextInput] = useState('');
  const [selectedUtcDate, setSelectedUtcDate] = useState('');
  const [selectedUtcDate2, setSelectedUtcDate2] = useState('');

  const handleDateChange = (utcDate) => {
    setSelectedUtcDate(utcDate);
  };
  const handleDateChange2 = (utcDate) => {
    setSelectedUtcDate2(utcDate);
  };

  // `https://api.example.com/data?param1=${selectedValue1}&param2=${selectedValue2}&param3=${textInput}`

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`http://3.20.240.157:8080/getInteractions?type=${selectedValue1}&address=${textInput}&start=${selectedUtcDate}&end=${selectedUtcDate2}`);
      console.log(response.data.res)
      setData(response.data.res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white ">
      <nav className="bg-gray-800 p-4 w-full">
        {/* Navbar content goes here */}
        <img src={logoImage} alt="Logo" className="h-5 w-auto inline" />
        <span className='inline'> interactsh-web</span>
        
      </nav>


      <div className="flex items-center justify-center h-full">
        <div className="">
         

            <div className="flex">
  <div className="w-1/6 mr-20">   protocol   </div>
  <div className="w-1/2 "><select
              className="bg-gray-800 text-white"
              value={selectedValue1}
              onChange={(e) => setSelectedValue1(e.target.value)}
            >
              <option value="">none</option>
              <option value="http">http</option>
              <option value="dns">dns</option>
            </select></div>


          
        
          </div>
          {/* Text Input */}
         

          <div className="flex mb-2">
  <div className="w-1/3  h-12">remote address   </div>
  <div className="w-1/2 h-12"> <input className='h-5'
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="192.168.1.1"
        
          /></div>
</div>


         
          

          <div className="flex">
  <div className="w-1/3  h-12">Start time  </div>
  <div className="w-1/2  h-12"><DateSelector onDateChange={handleDateChange} /></div>
</div>

<div className="flex">
  <div className="w-1/3  h-12">end time  </div>
  <div className="w-1/2  h-12"><DateSelector onDateChange={handleDateChange2} /></div>
</div>

         
      
  
          {/* Submit Button */}
       <div className='pt-2 items-center '>
          <button
            className="bg-fuchsia-700		 ps-2 pe-2"
            onClick={handleSubmit}
          >
             GET Interations
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center divide-y divide-blue-200">
        <table className="table-auto border-separate border-spacing-2  ">
  <thead>
    <tr>
      <th className="w-1/4 " >protocol</th>
      <th className="w-1/3">address</th>
      <th className="w-1/2">timestamp</th>
    </tr>
  </thead>
  <tbody className=''>
        {data.map((item) => (
          
          <tr className="" key={item.timestamp} > 
            {/* Display item details */}
            <td>{item.protocol}</td> <td>{item['remote-address']}</td>
            <td><DisplayDate utcDate={item.timestamp} /></td>
          </tr>
         ))} 

</tbody>
</table>
      </div>
    </div>
  );
};

export default App;
