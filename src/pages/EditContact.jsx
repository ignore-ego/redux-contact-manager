import { useParams } from 'react-router-dom';
import { Authorize } from '../components/auth';
import { Layout } from '../layouts/Layout';
import { useSelector } from 'react-redux';
import { ContactForm } from '../components/contacts';

export const EditContactPage = () => {
  const { id: contactId } = useParams();
  // tema useEffect cu readContact
  // in cazul in care intram direct in pagina asta
  const contact = useSelector(({ contacts }) => {
    return contacts.entities[contactId];
  });
  const { name } = contact;

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-14">
        <Authorize>
          <h1>Edit contact: {name}</h1>

          <div className="mx-auto w-1/3">
            <ContactForm contact={contact} edit={true}></ContactForm>
          </div>
        </Authorize>
      </div>
    </Layout>
  );
};
