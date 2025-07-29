import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from '../../prisma/client';
import { Role } from "@prisma/client";

interface RegisterUserInput {
    email: string;
    name: string;
    password: string;
    role: Role;
}

interface LoginUserInput {
    email: string;
    password: string;
}

export const registerUser = async (input: RegisterUserInput) => {
    const { email, password, name, role } = input;

    // 1️⃣ Check if the email is already registered
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error("Email is already in use.");
    }

    // 2️⃣ Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Create the user with the selected role
    const newUser = await prisma.users.create({
        data: {
            email,
            password: hashedPassword,
            name,
            role,
        },
    });

    // 4️⃣ Generate a JWT token
    const token = jwt.sign(
        { id: newUser.id, role: newUser.role },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    return { token, message: "User registered successfully." };
};

export const loginUser = async (input: LoginUserInput) => {
    const { email, password } = input;

    // 1️⃣ Find the user by email
    const user = await prisma.users.findUnique({ where: { email } });

    // 2️⃣ Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid email or password.");
    }

    // 3️⃣ Generate a JWT token
    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    return { token, message: "User registered successfully."  };
};
