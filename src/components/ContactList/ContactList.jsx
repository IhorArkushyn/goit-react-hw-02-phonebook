import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import * as S from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <S.List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onDeleteContact}
        />
      ))}
    </S.List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
