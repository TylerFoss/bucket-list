import React from 'react';

class Form extends React.Component {
    render(){
        return (
            <form
      onSubmit={ e => {
        e.preventDefault();
        add(input.value)
        input.value = null;
      }}
    >
      <input 
        placeholder={placeholder}
        ref={ n => input = n }
        required
      />
    </form>
        )
    }
}

export default Form