import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, phone);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.formLabel}>
        <span className={s.formTitle}>Name</span>
        <input
          className={s.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={s.formLabel}>
        <span className={s.formTitle}>Phone number</span>
        <input
          className={s.formInput}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={phone}
          onChange={handleChange}
        />
      </label>

      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.protoType = {
  onSubmit: PropTypes.func.isRequired,
};
