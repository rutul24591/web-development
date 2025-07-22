export {};

export type Roles = 'admin' | 'moderator';

/** Extend clerks session token type globally.
 * This will provide autocompletion and prevent type script errors when working with roles throughout
 * the application
 */
declare global {
	interface CustomJwtSessionClaims {
		metadata: {
			role?: Roles;
		};
	}
}
