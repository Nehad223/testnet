
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
function App() {
  const [postContent, setPostContent] = useState('');
  const[Demmy_Meals,setDemmy_Meals]=useState([]);
  useEffect(()=>{ axios.get('https://nehadshretahh.pythonanywhere.com/items/')
    .then((response=>{
      console.log(response.data);
      setDemmy_Meals(response.data.items)
    }))
    
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      content: postContent,
    };

    try {
      const response = await axios.post('https://nehadshretahh.pythonanywhere.com/post/',{name:"nehad",location:"lattakia",number:216157,arraynumber:[1,2,3]}  );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>إنشاء منشور</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} />
        <button type="submit">إنشاء</button>
      </form>
    </div>
  );
}

export default App;