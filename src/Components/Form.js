import React, {useState} from 'react';
// import PropTypes from 'prop-types';

const Form = ({ inputs, actionSubmit, title }) => {
  const initialInputs = Object.keys(inputs).reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});
  const [formInputs, setFormInputs] = useState(initialInputs);

  //Handle input change on a form
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function submitForm(event) {
    event.preventDefault();
    actionSubmit(formInputs);
  };

  return (
    <form className="login-container" onSubmit={submitForm}>
      <h2>{title}</h2>
      <div>
        {Object.entries(inputs).map(([name, attributes]) => (
          <>
          <input
            key={name}
            type={attributes[1] || "text"}
            name={name}
            value={formInputs[name] || ""}
            onChange={handleInputChange}
            placeholder={name.split("_").join(" ")}
            required={attributes[0]}
          />
          <br/>
          </>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// Form.propTypes = {
  // variables: PropTypes.Object.isRequired,
// };

export default Form;
