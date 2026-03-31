import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentContacts = await readContacts();
  currentContacts.push(createFakeContact());
  await writeContacts(currentContacts);
};

addOneContact();