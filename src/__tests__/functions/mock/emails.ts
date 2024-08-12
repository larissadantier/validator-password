export const validEmails = [
  'lari@example.com',
  'lari@sub.domain.co.uk',
  'lari123@my-domain.net',
  'lari@gmail.com',
  'lari_dantier@hotmail.com.br'
]

export const invalidEmails = [
  'invalid-email',
  'user@domain',
  'user@domain.',
  'user@domain..com',
  'user@domain@domain.com',
  'user@domain.com;user@domain.com',
  'user@domain.com; user@domain.com',
  'user@domain.com (Lari)'
]

export const emailsWithSpaces = [
  'user @domain.com',
  'user@ domain.com',
  'user@domain. com',
  ' user@domain.com',
  'user@domain.com ',
  'user@do main.com'
];