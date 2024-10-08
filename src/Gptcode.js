import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;

function Godata() {
  const formRef = useRef(null);

  useEffect(() => {
    onGeoOk();
  }, []);

  function onGeoOk() {
    const url = `https://port-0-tofaker-backend-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/feed/random`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function submitForm() {
    const form = formRef.current; 
    const formData = new FormData(form);

    const url = 'https://port-0-tofaker-backend-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/feed';

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch(url, {
      method: 'POST',
      /*headers: {
        'Authorization': '7470c985ca283e19082b9ad5f875931e',
        'email': 's24066@gsm.hs.kr', 
      },*/      
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Form ref={formRef}>        
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" required /><br /><br />
      
      <label htmlFor="content">Content:</label>
      <input type="text" id="content" name="content" required /><br /><br />
      
      <label htmlFor="pictureUrl">Picture URL:</label>
      <input type="text" id="pictureUrl" name="pictureUrl" /><br /><br />

      <button type="button" onClick={submitForm}>Submit</button> {/* onClick으로 수정 */}
    </Form>
  );
}

export default Godata;
