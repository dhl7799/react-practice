import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import data from './assets/json/data.json'
/**
 * 
 *  1. 처음에 가져오기
 *  2. 등록하면 처음에다가 add 시킥
 *  3. 찾기도 db기준으로 바꿔치기
 *  4. 삭제, no만 와서 findIndex해서 삭제, 비파괴로 (splice)
 * 
 */
const App = () => {
  const [emails, setEmails] = useState(data);

  const searchEmails = async (keyword) => {
    try{
      const response = await fetch('/api/search/?keyword='+keyword,{
          method: 'get',
          headers: {
          'Accept': 'application/json'
          }
      });
      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();
      console.log(json);
      if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
    }

    setEmails(json.data);
  } catch(err){
      console.log(err.message);
  }
  }
  // const notifyKeyWordChanged = function(keyword){
  //   // keyword가 firstName or lastName or email
  //   const emails = 
  //   data
  //   .filter(email => email
  //     .firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1 )

  //   setEmails(emails);
  // }

  const fetchEmails = async () =>{
    try{
        const response = await fetch('/api/list',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
                
            }
        });
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        console.log(json);
        if(json.result !== 'success'){
            throw new Error(`${json.result} ${json.message}`);
        }

        setEmails(json.data);
    } catch(err){
        console.log(err.message);
    }
    
}

const addEmail = async (firstName, lastName, email) => {
  const newEmail = {
      no: null,
      firstName: firstName,
      lastName: lastName,
      email: email
  };

  try{
      const response = await fetch('/api/insert',{
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newEmail)
      });
      if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();
      console.log(json);
      if(json.result !== 'success'){
          throw new Error(`${json.result} ${json.message}`);
      }

      setEmails([json.data, ...emails]);
  } catch(err){
      console.log(err.message);
  }
}

const deleteEmail = async(no) => {
    console.log("no: " + no);
  try{
    const response = await fetch(`/api/delete/${no}`,{
        method: 'delete',
        headers: {
            'Accept': 'application/json'
        }
    });
    if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    console.log(json);
    if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
    }

    setEmails(emails.filter((email) => email.no !== no));
} catch(err){
    console.log(err.message);
}

}

useEffect(()=>{
  fetchEmails();
}, []);
  

  return (
    <div id={'App'}>
      <RegisterForm callbackAddEmail={addEmail}/>
      <SearchBar callback={searchEmails} />
      <Emaillist emails={emails} callbackDeleteEmail={deleteEmail} />
    </div>
  )
}

export default App;