import bcrypt from 'bcrypt';

const security = {
    hashPassword: async (password) => {
        return await bcrypt.hash(password, 10);
    },
    /**
     * 
     * @param {string} password 
     * @param {string} hashedPassword 
     * @returns {boolean}
     * @description Compares a plain text password with a hashed password
     * @example security.comparePasswords("password", "$2b$10$zv9")
     */
    comparePasswords: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    }
}

export default security