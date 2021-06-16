import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

export default function ContactForm() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong...');
    }
  }

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        name: enteredName,
        phone: enteredPhone,
        email: enteredEmail,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredName('');
      setEnteredPhone('');
      setEnteredEmail('');
      setEnteredMessage('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'AG Law will contact you shortly',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Contact AG Law</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={enteredPhone}
              onChange={(event) => setEnteredPhone(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="10"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>
            {requestStatus === 'pending'
              ? `${notification.title}`
              : requestStatus === 'success'
              ? `${notification.title}`
              : 'Send Message'}
          </button>
        </div>
      </form>
      {requestStatus === 'success' && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
