import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Container } from './Container/Container';
import { useSelector } from 'react-redux';
import {
  errorSelector,
  loadingSelector,
} from 'redux/contacts/contacts-selectors';

//--------------------------------------------------------------------//

const App = () => {
  const customError = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        {customError && <p>{customError}</p>}
        {!customError && <ContactList />}
        {loading && (
          <p>
            <b>Working...</b>
          </p>
        )}
      </Container>
    </div>
  );
};

export { App };
