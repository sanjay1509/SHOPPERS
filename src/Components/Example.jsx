import React, { useState } from 'react';
import '../../src/App.css';

const options = {
  landing: ['Contact Us'],
  conceptCards: ['Report an Issue', 'Share Feedback', 'Give Suggestion'],
  default: ['Report an Issue', 'Share Feedback', 'Give Suggestion', 'Contact Us']
};

const FAB = ({ page = 'default', isLoggedIn = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    section: page,
    description: '',
    feedback: '',
    anonymous: false,
    email: '',
    name: '',
    mobile: ''
  });

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      handleClose();
    } else {
      setSelectedOption(option);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({ ...prevData, attachment: file }));
  };

  const handleClose = () => {
    setSelectedOption(null);
    setIsOpen(false);
    setFormData({
      title: '',
      section: page,
      description: '',
      feedback: '',
      anonymous: false,
      email: '',
      name: '',
      mobile: ''
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
    handleClose();
  };

  const isSubmitDisabled = () => {
    switch (selectedOption) {
      case 'Report an Issue':
        return !formData.description;
      case 'Share Feedback':
        return isLoggedIn ? !formData.feedback : !formData.feedback || !formData.email;
      case 'Give Suggestion':
        return isLoggedIn ? !formData.description : !formData.description || !formData.email;
      case 'Contact Us':
        return isLoggedIn ? !formData.name || !formData.description : !formData.name || !formData.email || !formData.mobile || !formData.description;
      default:
        return true;
    }
  };

  const renderCard = () => {
    if (!selectedOption) return null;

    return (
      <div className="card">
        {selectedOption === 'Report an Issue' && (
          <>
            <h3 className='head'>Let us know about the issue you are facing right now !</h3>
            <hr />
            <label>
              Choose a section:
              <select name="section" value={formData.section} onChange={handleInputChange}>
                <option value="interviewQuestion">Interview Question</option>
                {/* Add other sections as needed */}
              </select>
            </label>
            <label>
              Describe the issue in detail *:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Write here"
                required
              />
            </label>
            <label className="attach-option">
              Attach
              <input
                type="file"
                name="attachment"
                onChange={handleFileChange}
              />
            </label>
            <label>Enter Your email to receive an update
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
              </label>
          </>
        )}

        {selectedOption === 'Share Feedback' && (
          <>
            <h3>Let us know about the issue you are facing</h3>
            <hr />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="Write here"
              required
            />
             <label className="attach-option">
              Attach
              <input
                type="file"
                name="attachment"
                onChange={handleFileChange}
              />
              </label>
            {isLoggedIn ? (
              
              <label>
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                />
                Send anonymously
              </label>

            ) : (
              <label>Enter Your email to receive an update
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
              </label>
            )}
          </>
        )}
        {selectedOption === 'Give Suggestion' && (
          <>
          <h3>Share your suggestions with us for a chance to earn rewards!
          </h3>
            <label>
              Choose a section:
              <select value="Select" name="section" onChange={handleInputChange}>
                <option value="interviewQuestion">Interview Question</option>
                {/* Add other sections as needed */}
              </select>
            </label>
            <label>Describe the suggestion in detail</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="write here"
              required
              
            />
            <label className="attach-option">
              Attach
              <input
                type="file"
                name="attachment"
                onChange={handleFileChange}
              />
            </label>
            {!isLoggedIn && (
              <label>Enter your email to receive an update
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
              </label>
            )}
          </>
        )}
        {selectedOption === 'Contact Us' && (
          <>
          <h3>Let us know what your queries are!</h3>
          <hr />
          <label>Enter Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your Name"
              required
            />
            <label>Enter Email:</label>
            <input
              type="email"
              name="email"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
            <label>Your Mobile number :</label>
            <input
              type="number"
              name="number"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your Number"
              required
            />
            {!isLoggedIn && (
              <>
              </>
            )}
            <label>What would you like to ask *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="What would you like to ask?"
              required
            />
          </>
        )}
        <div className="card-buttons">
          <button onClick={handleSubmit} disabled={isSubmitDisabled()}>Submit</button>
        </div>
      </div>
    );
  };

  const pageOptions = options[page] || options.default;

  return (
    <div className="fab-container">
      {renderCard()}
      {isOpen && (
        <div className={`options-container ${selectedOption ? 'options-bottom' : ''}`}>
          {pageOptions.map(option => (
            <button 
              key={option} 
              className={`option ${selectedOption === option ? 'option-selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <button className={`fab ${isOpen ? 'fab-selected' : ''}`} onClick={handleToggle}>
        <span className="fab-icon">{isOpen ? '✕' : '+'}</span>
      </button>
    </div>
  );
};

export default FAB;
