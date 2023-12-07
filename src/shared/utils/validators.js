const validEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const Validators = {
  email: (value) => validEmailRegex.test(value),
  required: (value) => value && typeof value === 'string' && value.trim().length > 0,
}