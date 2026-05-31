export const ADMIN_EMAILS = [
  'gargmohit8306@gmail.com',
  'admin@internmitra.com',
];

export function isAdminEmail(email?: string | null) {
  return Boolean(email && ADMIN_EMAILS.includes(email.toLowerCase()));
}
