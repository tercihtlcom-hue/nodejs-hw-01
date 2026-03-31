import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const currentContacts = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);
  await writeContacts([...currentContacts, ...newContacts]);
};

generateContacts(5);