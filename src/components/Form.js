import React from 'react'

export default function MembersForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props


    return (
        //Form Return
        <form className="form-container" onSubmit={onSubmit}>
        <div>
            <h3>Add a team memeber</h3>
            <button>Add</button>
        </div>

        <div className="forms">
            <label> Name: &nbsp;
            <input 
            type="text" 
            placeholder="Type a name" 
            maxLength="15" 
            name="name" 
            values={values.name}  
            onChange={onInputChange} />
            </label>

            <label> Email : &nbsp;
            <input 
            type="text"
            placeholder="Enter a Email"
            maxLength="20"
            name="email"
            values={values.email}
            onChange={onInputChange} />
            </label>


            <label> Role: &nbsp;
                <select name='role' value={values.role} onChange={onInputChange}>
                    <option value="">Select A Role</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="UX">UX</option>
                    <option value="Sales">Sales</option>
                </select> 
            </label>


        </div>
        </form>
    
    )
}