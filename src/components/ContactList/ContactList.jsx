import { ContactItem } from './ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from 'redux/contacts/contscts-actions';
import {
  filterSelector,
  itemsSelector,
  loadingSelector,
} from 'redux/contacts/contacts-selectors';
//----------------------------------------------------------------//

const ContactList = () => {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const contacts = items.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };
  if (isLoading) {
    return <h2>...loading</h2>;
  } else {
    return (
      <ul>
        {contacts.map(({ id, name, phone }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              onDelete={deleteContact}
            />
          );
        })}
      </ul>
    );
  }
};

export { ContactList };
