/*import React, { useState } from "react";//


function FieldForm() {
  const [fieldCount, setFieldCount] = useState(1);
  const [fields, setFields] = useState([{ id: 1, name: "field-1" }]);

  function addField() {
    const newFieldCount = fieldCount + 1;
    const newFields = [...fields, { id: newFieldCount, name: `field-${newFieldCount}` }];
    setFieldCount(newFieldCount);
    setFields(newFields);
    
    
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.name}>Field {field.id}:</label>
          <input type="text" id={field.name} name={field.name} />
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
    
    
    
    
    */





export const Create = () => {
    return (
        <><div className="form-group-attendance">
            <form className="form">
                <label for="first-name" class="name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />

                <label for="last-name"class="name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
            </form>
        </div><div className="form-group-attendance2">
                <form className="form">
                    <label for="first-name" class="name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />

                    <label for="last-name" class="name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />
                </form>
                
               
            </div><div className="form-group-attendance3">

<button class="save"type="submit">Save</button>


 
        </div></>
    );
  };