import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export function ContactList({ contacts, onDeleteContact }) {
  return contacts.length ? (
    <ul className={s.list}>
      {contacts.map(({ name, phone, id }) => (
        <ContactItem
          name={name}
          phone={phone}
          id={id}
          onDeleteContact={onDeleteContact}
          key={id}
        />
      ))}
    </ul>
  ) : (
    <p className={s.list}>There is no contact yet</p>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
