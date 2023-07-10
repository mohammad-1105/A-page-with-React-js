import "../styles/contact.css";

function Contact() {
  return (
    <div className="contactMainContainer">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Contact Us</h1>
        <div className="nameLabelInputBox">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name here..." />
        </div>
        <div className="emailLabelInputBox">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email here..."
          />
        </div>
        <div className="textareaDiv">
            <h3>Comment</h3>
            <textarea cols="20" rows="10" placeholder="Leave messages here..."></textarea>
        </div>
        <button className="formSubmitBtn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
